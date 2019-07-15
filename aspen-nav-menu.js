import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-selector/iron-selector.js';
import './aspen-icons/aspen-icons.js';
import './aspen-security/aspen-securable-mixin.js';
import './aspen-login/aspen-login-menu-item.js';
import './aspen-nav-menu-item.js';
import './aspen-secure-nav-menu-item.js';
import './aspen-nav-user-item.js';
import './aspen-nav-menu-mixin.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { AspSecurableMixin } from './aspen-security/aspen-securable-mixin';
import { AspNavMenuMixin } from './aspen-nav-menu-mixin';
/**
 * `aspen-nav-menu` This component is responsible for displaying the navigation menu.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspNavMenu extends AspSecurableMixin(AspNavMenuMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: #505050;
        }

        hr {
          color: white;
        }

        .selector {
          height: 100vh;
          overflow-y: scroll;
        }

        aspen-nav-menu-item[label='Subscribe'] {
          --icon-color: rgb(249, 200, 40);
        }

        aspen-nav-menu-item[disabled] {
          color: #909090;
        }
      </style>

      <div class="selector">
        <iron-selector
          on-selected-changed="__menuSelected"
          attr-for-selected="page"
          class="drawer-list"
          role="navigation"
        >
          <aspen-nav-user-item
            page="profile"
            model="[[user]]"
            profile="[[profile]]"
            is-logged-in="[[isLoggedIn]]"
            disabled="[[!isLoggedIn]]"
          ></aspen-nav-user-item>
          <hr />

          <aspen-nav-menu-item
            label="Subscribe"
            icon="aspen:ticket"
            page="subscribe"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="Home"
            icon="aspen:home"
            page="home-page"
          ></aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="Communities"
            icon="aspen:people"
            page="communities"
            disabled="[[!isLoggedIn]]"
          ></aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="Companies"
            icon="aspen:domain"
            page="companies"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="News"
            icon="aspen:news"
            page="news"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="Resources"
            icon="aspen:truck"
            page="resources"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="Investors &amp; Partners"
            icon="aspen:investor"
            page="investors"
            disabled="[[!isLoggedIn]]"
          ></aspen-nav-menu-item>

          <hr />
          <aspen-nav-menu-item
            label="Activity"
            icon="aspen:whatshot"
            page="activities"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="Events"
            icon="aspen:calendar"
            page="events"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>
          <aspen-nav-menu-item
            label="Portfolio"
            icon="aspen:work"
            page="portfolio"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>

          <hr />
          <aspen-nav-menu-item
            label="Advice"
            icon="aspen:advice"
            page="advice"
            disabled="[[!isLoggedIn]]"
          >
          </aspen-nav-menu-item>

          <aspen-nav-menu-item
            label="Feedback"
            icon="aspen:feedback"
            page="https://docs.google.com/forms/d/e/1FAIpQLSdGkRuB9X3jHY89RgtJC9IvnNyGXMicrKVtqGrKi2dqTlYB4g/viewform?usp=pp_url&amp;entry.490618000=Have+someone+follow+up+with+me."
          >
          </aspen-nav-menu-item>
          <aspen-secure-nav-menu-item
            label="Settings"
            icon="aspen:settings"
            page="settings"
            has-role="[[claims.isAdmin]]"
          ></aspen-secure-nav-menu-item>
          <aspen-login-menu-item
            page="login"
            is-logged-in="[[isLoggedIn]]"
          ></aspen-login-menu-item>
        </iron-selector>
      </div>
    `;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-nav-menu';
  }

  static get properties() {
    return {
      claims: {
        type: Object,
        value: null,
        notify: true
      }
    };
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

window.customElements.define(AspNavMenu.is, AspNavMenu);