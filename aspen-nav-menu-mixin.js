/**
 * This mixin is used for top-level navigation only.
 * @polymerMixin
 * @mixinFunction
 */
export const AspenNavMenuMixin = superclass =>
  class extends superclass {
    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
      return {
        selectedIndex: {
          type: Number,
          value: 0
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
        }
      };
    }

    /**
     * This method handles the menu selection event.
     * @param e
     */

    __menuSelected(e) {
      if (e.detail.value != 'home-page' && !this.isLoggedIn) {
        this.dispatchEvent(
          new CustomEvent('show-msg', {
            bubbles: true,
            composed: true,
            detail: {
              msg: 'Please login or create an account'
            }
          })
        );
        return;
      }
      let page = e.detail.value;
      if (page.startsWith('http')) {
        window.open(page);
      } else if (page != 'login') {
        window.location = `/${e.detail.value}`;
      } else {
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
    }
  };
