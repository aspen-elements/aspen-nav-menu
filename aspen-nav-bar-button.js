import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-label/iron-label.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './aspen-nav-item-mixin.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { AspNavItemMixin } from './aspen-nav-item-mixin';
/**
 * `aspen-nav-button` This component displays an icon and a label beneath it.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspNavBarButton extends AspNavItemMixin(PolymerElement) {
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-nav-bar-button';
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

window.customElements.define(AspNavBarButton.is, AspNavBarButton);
