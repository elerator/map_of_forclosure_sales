import { css } from "react-emotion";

const style = css`
  .ui.input {
    position: relative;
    font-weight: normal;
    font-style: normal;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    color: rgba(0, 0, 0, 0.87);
  }
  .ui.input > input {
    margin: 0em;
    max-width: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    text-align: left;
    line-height: 1.21428571em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0.67857143em 1em;
    background: #ffffff;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    border-radius: 3px;
    -webkit-transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease;
    transition: box-shadow 0.1s ease, border-color 0.1s ease,
      -webkit-box-shadow 0.1s ease;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.input > input::-webkit-input-placeholder {
    color: rgba(191, 191, 191, 0.87);
  }
  .ui.input > input::-moz-placeholder {
    color: rgba(191, 191, 191, 0.87);
  }
  .ui.input > input:-ms-input-placeholder {
    color: rgba(191, 191, 191, 0.87);
  }

  .ui.disabled.input,
  .ui.input:not(.disabled) input[disabled] {
    opacity: 0.45;
  }
  .ui.disabled.input > input,
  .ui.input:not(.disabled) input[disabled] {
    pointer-events: none;
  }

  .ui.input > input:active,
  .ui.input.down input {
    border-color: rgba(0, 0, 0, 0.3);
    background: #fafafa;
    color: rgba(0, 0, 0, 0.87);
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.loading.loading.input > i.icon:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    margin: -9px 0em 0em -9px;
    width: 18px;
    height: 18px;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }
  .ui.loading.loading.input > i.icon:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    margin: -9px 0em 0em -9px;
    width: 18px;
    height: 18px;
    -webkit-animation: button-spin 0.6s linear;
    animation: button-spin 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #80858e transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    -webkit-box-shadow: 0px 0px 0px 1px transparent;
    box-shadow: 0px 0px 0px 1px transparent;
  }

  .ui.input.focus > input,
  .ui.input > input:focus {
    border-color: #00aadc;
    background: #ffffff;
    color: rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.input.focus > input::-webkit-input-placeholder,
  .ui.input > input:focus::-webkit-input-placeholder {
    color: rgba(115, 115, 115, 0.87);
  }
  .ui.input.focus > input::-moz-placeholder,
  .ui.input > input:focus::-moz-placeholder {
    color: rgba(115, 115, 115, 0.87);
  }
  .ui.input.focus > input:-ms-input-placeholder,
  .ui.input > input:focus:-ms-input-placeholder {
    color: rgba(115, 115, 115, 0.87);
  }

  .ui.input.error > input {
    background-color: #fff6f6;
    border-color: #e0b4b4;
    color: #9f3a38;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.input.error > input::-webkit-input-placeholder {
    color: #e7bdbc;
  }
  .ui.input.error > input::-moz-placeholder {
    color: #e7bdbc;
  }
  .ui.input.error > input:-ms-input-placeholder {
    color: #e7bdbc !important;
  }

  .ui.input.error > input:focus::-webkit-input-placeholder {
    color: #da9796;
  }
  .ui.input.error > input:focus::-moz-placeholder {
    color: #da9796;
  }
  .ui.input.error > input:focus:-ms-input-placeholder {
    color: #da9796 !important;
  }

  .ui.transparent.input > input {
    border-color: transparent !important;
    background-color: transparent !important;
    padding: 0em !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border-radius: 0px !important;
  }

  .ui.transparent.icon.input > i.icon {
    width: 1.1em;
  }
  .ui.transparent.icon.input > input {
    padding-left: 0em !important;
    padding-right: 2em !important;
  }
  .ui.transparent[class*="left icon"].input > input {
    padding-left: 2em !important;
    padding-right: 0em !important;
  }

  .ui.transparent.inverted.input {
    color: #ffffff;
  }
  .ui.transparent.inverted.input > input {
    color: inherit;
  }
  .ui.transparent.inverted.input > input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  .ui.transparent.inverted.input > input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  .ui.transparent.inverted.input > input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .ui.icon.input > i.icon {
    cursor: default;
    position: absolute;
    line-height: 1;
    text-align: center;
    top: 0px;
    right: 0px;
    margin: 0em;
    height: 100%;
    width: 2.67142857em;
    opacity: 0.5;
    border-radius: 0em 3px 3px 0em;
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }
  .ui.icon.input > i.icon:not(.link) {
    pointer-events: none;
  }
  .ui.icon.input > input {
    padding-right: 2.67142857em !important;
  }
  .ui.icon.input > i.icon:before,
  .ui.icon.input > i.icon:after {
    left: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    margin-top: -0.5em;
  }
  .ui.icon.input > i.link.icon {
    cursor: pointer;
  }
  .ui.icon.input > i.circular.icon {
    top: 0.35em;
    right: 0.5em;
  }

  .ui[class*="left icon"].input > i.icon {
    right: auto;
    left: 1px;
    border-radius: 3px 0em 0em 3px;
  }
  .ui[class*="left icon"].input > i.circular.icon {
    right: auto;
    left: 0.5em;
  }
  .ui[class*="left icon"].input > input {
    padding-left: 2.67142857em !important;
    padding-right: 1em !important;
  }

  .ui.icon.input > input:focus ~ i.icon {
    opacity: 1;
  }

  .ui.labeled.input > .label {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin: 0;
    font-size: 14px;
  }
  .ui.labeled.input > .label:not(.corner) {
    padding-top: 0.78571429em;
    padding-bottom: 0.78571429em;
  }

  .ui.labeled.input:not([class*="corner labeled"]) .label:first-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .ui.labeled.input:not([class*="corner labeled"]) .label:first-child + input {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left-color: transparent;
  }
  .ui.labeled.input:not([class*="corner labeled"])
    .label:first-child
    + input:focus {
    border-left-color: #00aadc;
  }

  .ui[class*="right labeled"].input > input {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-right-color: transparent !important;
  }
  .ui[class*="right labeled"].input > input + .label {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .ui[class*="right labeled"].input > input:focus {
    border-right-color: #00aadc !important;
  }

  .ui.labeled.input .corner.label {
    top: 1px;
    right: 1px;
    font-size: 0.64285714em;
    border-radius: 0em 3px 0em 0em;
  }

  .ui[class*="corner labeled"]:not([class*="left corner labeled"]).labeled.input
    > input {
    padding-right: 2.5em !important;
  }
  .ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"])
    > input {
    padding-right: 3.25em !important;
  }
  .ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"])
    > .icon {
    margin-right: 1.25em;
  }

  .ui[class*="left corner labeled"].labeled.input > input {
    padding-left: 2.5em !important;
  }
  .ui[class*="left corner labeled"].icon.input > input {
    padding-left: 3.25em !important;
  }
  .ui[class*="left corner labeled"].icon.input > .icon {
    margin-left: 1.25em;
  }

  .ui.input > .ui.corner.label {
    top: 1px;
    right: 1px;
  }
  .ui.input > .ui.left.corner.label {
    right: auto;
    left: 1px;
  }

  .ui.action.input > .button,
  .ui.action.input > .buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  .ui.action.input > .button,
  .ui.action.input > .buttons > .button {
    padding-top: 0.78571429em;
    padding-bottom: 0.78571429em;
    margin: 0;
  }

  .ui.action.input:not([class*="left action"]) > input {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-right-color: transparent !important;
  }
  .ui.action.input:not([class*="left action"]) > .dropdown:not(:first-child),
  .ui.action.input:not([class*="left action"]) > .button:not(:first-child),
  .ui.action.input:not([class*="left action"])
    > .buttons:not(:first-child)
    > .button {
    border-radius: 0px;
  }
  .ui.action.input:not([class*="left action"]) > .dropdown:last-child,
  .ui.action.input:not([class*="left action"]) > .button:last-child,
  .ui.action.input:not([class*="left action"]) > .buttons:last-child > .button {
    border-radius: 0px 3px 3px 0px;
  }

  .ui.action.input:not([class*="left action"]) > input:focus {
    border-right-color: #00aadc !important;
  }

  .ui[class*="left action"].input > input {
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-left-color: transparent !important;
  }
  .ui[class*="left action"].input > .dropdown,
  .ui[class*="left action"].input > .button,
  .ui[class*="left action"].input > .buttons > .button {
    border-radius: 0px;
  }
  .ui[class*="left action"].input > .dropdown:first-child,
  .ui[class*="left action"].input > .button:first-child,
  .ui[class*="left action"].input > .buttons:first-child > .button {
    border-radius: 3px 0px 0px 3px;
  }

  .ui[class*="left action"].input > input:focus {
    border-left-color: #00aadc !important;
  }

  .ui.inverted.input > input {
    border: none;
  }

  .ui.fluid.input {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .ui.fluid.input > input {
    width: 0px !important;
  }

  .ui.mini.input {
    font-size: 11px;
  }
  .ui.small.input {
    font-size: 12px;
  }
  .ui.input {
    font-size: 14px;
  }
  .ui.large.input {
    font-size: 16px;
  }
  .ui.big.input {
    font-size: 18px;
  }
  .ui.huge.input {
    font-size: 21px;
  }
  .ui.massive.input {
    font-size: 24px;
  }

  .ui.input input {
    font-size: 100%;
  }
  .ui.input.rounded input {
    border-radius: 2rem;
  }
`;

export default style;
