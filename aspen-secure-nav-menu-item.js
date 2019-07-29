import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/font-roboto/roboto.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { AspenNavItemMixin } from '@aspen-elements/aspen-nav-item-mixin';
import { AspenSecurableMixin } from '@aspen-elements/aspen-securable-mixin';
/**
 * `aspen-secure-nav-menu-item` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenSecureNavMenuItem extends AspenSecurableMixin(
  AspenNavItemMixin(PolymerElement)
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

window.customElements.define(AspenSecureNavMenuItem.is, AspenSecureNavMenuItem);
