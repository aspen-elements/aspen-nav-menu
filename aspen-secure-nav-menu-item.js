import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/font-roboto/roboto.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './aspen-security/aspen-securable-mixin.js';
import './aspen-nav-item-mixin.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { AspNavItemMixin } from './aspen-nav-item-mixin';
import { AspSecurableMixin } from './aspen-security/aspen-securable-mixin';
/**
 * `aspen-secure-nav-menu-item` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspSecureNavMenuItem extends AspSecurableMixin(
  AspNavItemMixin(PolymerElement)
) {
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-secure-nav-menu-item';
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

window.customElements.define(AspSecureNavMenuItem.is, AspSecureNavMenuItem);
