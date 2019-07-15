import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './aspen-nav-bar-button.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
/**
 * `aspen-nav-button-tray` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspNavButtonTray extends PolymerElement {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
				return 'aspen-nav-button-tray';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
				return {
            registry: {
                type: Array,
                value: []
            },

            buttons: {
                type: Array,
                computed: '_computeButtons(registry)'
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

				afterNextRender(this, function () {

				});
    }

    _isFirstHalf(buttons, i) {
				return i < 5;
    }

    _computeButtons(registry) {
				var buttons = [];
				if (registry != null) {
            for (var i = 0; i < registry.length; i++) {
                var buttonSet = registry[i];
                for (var j = 0; j < buttonSet.length; j++) {
                    var button = buttonSet[j];
                    if (button.inTray) {
                        buttons.push(button);
                    }
                }
            }
				}

				return buttons;
    }


}

window.customElements.define(AspNavButtonTray.is, AspNavButtonTray);
