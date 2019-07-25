import { PolymerElement,html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/font-roboto/roboto.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { AspNavItemMixin } from './aspen-nav-item-mixin';
/**
 * `aspen-nav-menu-item` This menu item allows the user to navigate to a particular page.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspNavMenuItem extends AspNavItemMixin(PolymerElement) {

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
				--disabled-color: #909090;
			}
			
			.menu-item{
				
				@apply --layout-horizontal;
			}

			paper-icon-item{
				--paper-item-icon-width: 24px;
				--paper-item-icon:{
					color: var(--icon-color);
					margin-right: 5px;
					--iron-icon-height: var(--icon-size);
					--iron-icon-width: var(--icon-size);
				}
			}

			paper-icon-item[disabled]{
				--paper-item-icon:{
					color: var(--disabled-color);
					margin-right: 5px;
					--iron-icon-height: var(--icon-size);
					--iron-icon-width: var(--icon-size);
				}
			}

			paper-icon-item > label{
				margin-top: 3px;
				font-family: 'Roboto';
				font-weight: var(--label-font-weight);
				font-size: var(--label-font-size);
				color: var(--label-color);
			}

			paper-icon-item[disabled] > label{
				color: var(--disabled-color);
			}
		</style>
		
		 <paper-icon-item disabled="[[disabled]]">
			 <iron-icon icon="[[icon]]" slot="item-icon"></iron-icon><label>[[label]]</label>
	     </paper-icon-item>
    `;
  }
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-nav-menu-item';
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

window.customElements.define(AspNavMenuItem.is, AspNavMenuItem);
