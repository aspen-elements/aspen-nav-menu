/**
 *
 * @polymerMixin
 * @mixinFunction
 */
export const AspenNavTabMenuMixin = superclass =>
  class extends superclass {
    static get observers() {
      return ["__highlight(selected)"];
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
      return {
        selected: {
          type: String,
          value: "",
          notify: true
        },

        /** A flag that indicates that the user is logged in. */
        isLoggedIn: {
          type: Boolean,
          value: false,
          notify: true
        },

        /** The firebase auth user object. */
        user: {
          type: Object,
          value: null
        },

        /** The user profile object from the database. */
        profile: {
          type: Object,
          value: null
        },

        id: {
          type: String,
          value: ""
        }
      };
    }

    /**
     * This method handles the menu selection event.
     * @param {String} selected the name of the selected tab
     */

    __menuSelected(selected) {}

    /**
     * This method is used to highlight the icon and label
     * for the selected tab.
     * @param {String} selected the name of the selected tab.
     */

    __highlight(selected) {
      if (selected) {
        this.set("selected", selected);
      }
    }
  };
