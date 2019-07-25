import { PolymerElement,html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/font-roboto/roboto.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './aspen-login-icons.js';
import '../aspen-nav-menu-mixin.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { AspNavItemMixin } from './../aspen-nav-item-mixin';
/**
 * `aspen-nav-menu-item` This component displays a login menu item. The menu item changes its view
 * and behavior depending on the current login state.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspLoginMenuItem extends AspNavItemMixin(PolymerElement) {

  static get template(){
    return html `
    <style>
    :host {
      display: block;
      --icon-size: 24px;
      --icon-color: white;
      --label-color:white;
      --label-font-size: 0.9em;
      --label-font-weight: normal;

    }

    paper-icon-item{
      --paper-item-icon-width: 24px;
      --paper-item-icon:{
        color: white;
        margin-right: 5px;
        --iron-icon-height: var(--icon-size);
        --iron-icon-width: var(--icon-size);
      }			
    }

    label{
      margin-top: 3px;
      font-family: 'Roboto';
      font-size: var(--label-font-size);
      color: var(--label-color);
    }
    
  </style>
  
   <paper-icon-item>
     <iron-icon icon="[[icon]]" slot="item-icon"></iron-icon><label>[[label]]</label>
     </paper-icon-item>
    
    `;
  }
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-login-menu-item';
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      /** A flag that indicates if the user is logged in. */
      isLoggedIn: {
        type: Boolean,
        value: false
      },

      /** The icon for the menu item. This icon changes depending on the login state. */
      icon: {
        type: String,
        computed: '__computeIcon(isLoggedIn)'
      },

      /** The label for the menu item. This label changes depending on the login state. */
      label: {
        type: String,
        computed: '__computeLabel(isLoggedIn)'
      }
    };
  }

  /**
   * This method computes the menu item.
   * @param {Boolean} isLoggedIn a flag that determines if the user is logged in.
   */
  __computeIcon(isLoggedIn) {
    return isLoggedIn ? 'login:logout' : 'login:login';
  }

  /**
   * This method computes the label.
   * @param {Boolean} isLoggedIn a flag that determines if the user is logged in.
   */
  __computeLabel(isLoggedIn) {
    return isLoggedIn ? 'Logout' : 'Login';
  }

  /**
   * This method is triggered whenever the user clicks on the menu item.
   * @param {Event} e the event object.
   */
  __handleTap(e) {
    if (this.isLoggedIn) {
      this.dispatchEvent(
        new CustomEvent('logout', {
          bubbles: true,
          composed: true,
          detail: {}
        })
      );
    } else {
      this.dispatchEvent(
        new CustomEvent('show-login-dialog', {
          bubbles: true,
          composed: true,
          detail: {}
        })
      );
    }
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
}

window.customElements.define(AspLoginMenuItem.is, AspLoginMenuItem);
