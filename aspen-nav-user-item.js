import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-item/paper-item.js";
import "@polymer/iron-image/iron-image.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/font-roboto/roboto.js";

import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { AspenNavItemMixin } from "@aspen-elements/aspen-nav-item-mixin";
/**
 * `aspen-nav-user-item` This component displays the currently logged in user's avatar
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspNavUserItem extends AspenNavItemMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --size: 32px;
        }
        paper-item {
          height: 57px;
          @apply --layout-horizontal;
        }

        iron-image {
          border-radius: 50%;
          margin-top: 5px;
          border: 2px solid white;
          width: var(--size);
          height: var(--size);
        }
        .label {
          font-family: "Roboto";
          margin-left: 5px;
          margin-top: 10px;
          color: white;
        }
        iron-icon {
          margin-top: 5px;
          border: 1px solid #909090;
          border-radius: 50%;
          color: #909090;
          --iron-icon-height: var(--size);
          --iron-icon-width: var(--size);
        }
      </style>

      <paper-item disabled="[[disabled]]">
        <template is="dom-if" if="[[hasAvatar]]">
          <iron-image src="[[avatarUrl]]" preload sizing="cover"></iron-image>
        </template>
        <template is="dom-if" if="[[!hasAvatar]]">
          <iron-icon icon="aspen:person"></iron-icon>
        </template>
        <div class="label">[[name]]</div>
      </paper-item>
    `;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return "aspen-nav-user-item";
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      /** The user's profile object (as stored in the database). */
      profile: {
        type: Object,
        value: null
      },

      /** A flag that indicates that the user is logged in. */
      isLoggedIn: {
        type: Boolean,
        notify: true
      },

      /** The firebase user object. */
      model: {
        type: Object,
        value: null
      },

      /** The URL of the user's avatar */
      avatarUrl: {
        type: String,
        computed: "__computeAvatarUrl(profile, model)"
      },

      /** The name of the user. */
      name: {
        type: String,
        computed: "__computeName(profile, model)"
      },

      /** A flag that determines if the model has been set. */
      hasAvatar: {
        type: Boolean,
        computed: "__hasAvatar(avatarUrl)"
      }
    };
  }

  /**
   * This method computes the user's avatar URL.
   * @param {Object} profile the pharm2market profile
   * @param {Object} model the firebase user object
   */
  __computeAvatarUrl(profile, model) {
    let url = "";

    if (model && model.photoUrl) {
      url = model.photoURL;
    } else if (profile && profile.avatar) {
      url = profile.avatar;
    }
    return url;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();

    afterNextRender(this, function() {});
  }

  /**
   * This method computes the name of the user (if they are logged in). Since the firebase user
   * may not have a displayName, the method checks to see if the profile has a name.
   * @param {Object} profile  the pharm2market profile object
   * @param {Object} model the firebase user model
   */
  __computeName(profile, model) {
    if (profile === null) {
      return "Not Signed In";
    }
    if (model && model.displayName) {
      name = model.displayName;
    } else if (profile && profile.firstName) {
      name = profile.firstName + " " + profile.lastName;
    } else {
      name = "Edit your Profile";
    }

    return name;
  }

  /**
   * This method determines if the user has an avatar either
   * in their firebase user object, or in their profile
   * @param {String} avatarUrl a string containing the avatar URL
   */
  __hasAvatar(avatarUrl) {
    return avatarUrl != null && avatarUrl != "";
  }

  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("page-changed", {
        bubbles: true,
        composed: true,
        detail: {
          model: this.model
        }
      })
    );
  }
}

window.customElements.define(AspNavUserItem.is, AspNavUserItem);
