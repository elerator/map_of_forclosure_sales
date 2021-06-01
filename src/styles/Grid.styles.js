import { css } from "react-emotion";

const style = css`
  .ui.grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    padding: 0em;
  }

  .ui.grid {
    margin-top: -1rem;
    margin-bottom: -1rem;
    margin-left: -1rem;
    margin-right: -1rem;
  }
  .ui.relaxed.grid {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  .ui[class*="very relaxed"].grid {
    margin-left: -2.5rem;
    margin-right: -2.5rem;
  }

  .ui.grid + .grid {
    margin-top: 1rem;
  }

  .ui.grid > .column:not(.row),
  .ui.grid > .row > .column {
    position: relative;
    display: inline-block;
    width: 6.25%;
    padding-left: 1rem;
    padding-right: 1rem;
    vertical-align: top;
  }
  .ui.grid > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .ui.grid > .row {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100% !important;
    padding: 0rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .ui.grid > .column:not(.row) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .ui.grid > .row > .column {
    margin-top: 0em;
    margin-bottom: 0em;
  }

  .ui.grid > .row > img,
  .ui.grid > .row > .column > img {
    max-width: 100%;
  }

  .ui.grid > .ui.grid:first-child {
    margin-top: 0em;
  }
  .ui.grid > .ui.grid:last-child {
    margin-bottom: 0em;
  }

  .ui.grid .aligned.row > .column > .segment:not(.compact):not(.attached),
  .ui.aligned.grid .column > .segment:not(.compact):not(.attached) {
    width: 100%;
  }

  .ui.grid .row + .ui.divider {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 1rem 1rem;
  }
  .ui.grid .column + .ui.vertical.divider {
    height: calc(50% - 1rem);
  }

  .ui.grid > .row > .column:last-child > .horizontal.segment,
  .ui.grid > .column:last-child > .horizontal.segment {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  @media only screen and (max-width: 767px) {
    .ui.page.grid {
      width: auto;
      padding-left: 0em;
      padding-right: 0em;
      margin-left: 0em;
      margin-right: 0em;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .ui.page.grid {
      width: auto;
      margin-left: 0em;
      margin-right: 0em;
      padding-left: 2em;
      padding-right: 2em;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .ui.page.grid {
      width: auto;
      margin-left: 0em;
      margin-right: 0em;
      padding-left: 3%;
      padding-right: 3%;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    .ui.page.grid {
      width: auto;
      margin-left: 0em;
      margin-right: 0em;
      padding-left: 15%;
      padding-right: 15%;
    }
  }
  @media only screen and (min-width: 1920px) {
    .ui.page.grid {
      width: auto;
      margin-left: 0em;
      margin-right: 0em;
      padding-left: 23%;
      padding-right: 23%;
    }
  }

  .ui.grid > .column:only-child,
  .ui.grid > .row > .column:only-child {
    width: 100%;
  }

  .ui[class*="one column"].grid > .row > .column,
  .ui[class*="one column"].grid > .column:not(.row) {
    width: 100%;
  }
  .ui[class*="two column"].grid > .row > .column,
  .ui[class*="two column"].grid > .column:not(.row) {
    width: 50%;
  }
  .ui[class*="three column"].grid > .row > .column,
  .ui[class*="three column"].grid > .column:not(.row) {
    width: 33.33333333%;
  }
  .ui[class*="four column"].grid > .row > .column,
  .ui[class*="four column"].grid > .column:not(.row) {
    width: 25%;
  }
  .ui[class*="five column"].grid > .row > .column,
  .ui[class*="five column"].grid > .column:not(.row) {
    width: 20%;
  }
  .ui[class*="six column"].grid > .row > .column,
  .ui[class*="six column"].grid > .column:not(.row) {
    width: 16.66666667%;
  }
  .ui[class*="seven column"].grid > .row > .column,
  .ui[class*="seven column"].grid > .column:not(.row) {
    width: 14.28571429%;
  }
  .ui[class*="eight column"].grid > .row > .column,
  .ui[class*="eight column"].grid > .column:not(.row) {
    width: 12.5%;
  }
  .ui[class*="nine column"].grid > .row > .column,
  .ui[class*="nine column"].grid > .column:not(.row) {
    width: 11.11111111%;
  }
  .ui[class*="ten column"].grid > .row > .column,
  .ui[class*="ten column"].grid > .column:not(.row) {
    width: 10%;
  }
  .ui[class*="eleven column"].grid > .row > .column,
  .ui[class*="eleven column"].grid > .column:not(.row) {
    width: 9.09090909%;
  }
  .ui[class*="twelve column"].grid > .row > .column,
  .ui[class*="twelve column"].grid > .column:not(.row) {
    width: 8.33333333%;
  }
  .ui[class*="thirteen column"].grid > .row > .column,
  .ui[class*="thirteen column"].grid > .column:not(.row) {
    width: 7.69230769%;
  }
  .ui[class*="fourteen column"].grid > .row > .column,
  .ui[class*="fourteen column"].grid > .column:not(.row) {
    width: 7.14285714%;
  }
  .ui[class*="fifteen column"].grid > .row > .column,
  .ui[class*="fifteen column"].grid > .column:not(.row) {
    width: 6.66666667%;
  }
  .ui[class*="sixteen column"].grid > .row > .column,
  .ui[class*="sixteen column"].grid > .column:not(.row) {
    width: 6.25%;
  }

  .ui.grid > [class*="one column"].row > .column {
    width: 100% !important;
  }
  .ui.grid > [class*="two column"].row > .column {
    width: 50% !important;
  }
  .ui.grid > [class*="three column"].row > .column {
    width: 33.33333333% !important;
  }
  .ui.grid > [class*="four column"].row > .column {
    width: 25% !important;
  }
  .ui.grid > [class*="five column"].row > .column {
    width: 20% !important;
  }
  .ui.grid > [class*="six column"].row > .column {
    width: 16.66666667% !important;
  }
  .ui.grid > [class*="seven column"].row > .column {
    width: 14.28571429% !important;
  }
  .ui.grid > [class*="eight column"].row > .column {
    width: 12.5% !important;
  }
  .ui.grid > [class*="nine column"].row > .column {
    width: 11.11111111% !important;
  }
  .ui.grid > [class*="ten column"].row > .column {
    width: 10% !important;
  }
  .ui.grid > [class*="eleven column"].row > .column {
    width: 9.09090909% !important;
  }
  .ui.grid > [class*="twelve column"].row > .column {
    width: 8.33333333% !important;
  }
  .ui.grid > [class*="thirteen column"].row > .column {
    width: 7.69230769% !important;
  }
  .ui.grid > [class*="fourteen column"].row > .column {
    width: 7.14285714% !important;
  }
  .ui.grid > [class*="fifteen column"].row > .column {
    width: 6.66666667% !important;
  }
  .ui.grid > [class*="sixteen column"].row > .column {
    width: 6.25% !important;
  }

  .ui.celled.page.grid {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.grid > .row > [class*="one wide"].column,
  .ui.grid > .column.row > [class*="one wide"].column,
  .ui.grid > [class*="one wide"].column,
  .ui.column.grid > [class*="one wide"].column {
    width: 6.25% !important;
  }
  .ui.grid > .row > [class*="two wide"].column,
  .ui.grid > .column.row > [class*="two wide"].column,
  .ui.grid > [class*="two wide"].column,
  .ui.column.grid > [class*="two wide"].column {
    width: 12.5% !important;
  }
  .ui.grid > .row > [class*="three wide"].column,
  .ui.grid > .column.row > [class*="three wide"].column,
  .ui.grid > [class*="three wide"].column,
  .ui.column.grid > [class*="three wide"].column {
    width: 18.75% !important;
  }
  .ui.grid > .row > [class*="four wide"].column,
  .ui.grid > .column.row > [class*="four wide"].column,
  .ui.grid > [class*="four wide"].column,
  .ui.column.grid > [class*="four wide"].column {
    width: 25% !important;
  }
  .ui.grid > .row > [class*="five wide"].column,
  .ui.grid > .column.row > [class*="five wide"].column,
  .ui.grid > [class*="five wide"].column,
  .ui.column.grid > [class*="five wide"].column {
    width: 31.25% !important;
  }
  .ui.grid > .row > [class*="six wide"].column,
  .ui.grid > .column.row > [class*="six wide"].column,
  .ui.grid > [class*="six wide"].column,
  .ui.column.grid > [class*="six wide"].column {
    width: 37.5% !important;
  }
  .ui.grid > .row > [class*="seven wide"].column,
  .ui.grid > .column.row > [class*="seven wide"].column,
  .ui.grid > [class*="seven wide"].column,
  .ui.column.grid > [class*="seven wide"].column {
    width: 43.75% !important;
  }
  .ui.grid > .row > [class*="eight wide"].column,
  .ui.grid > .column.row > [class*="eight wide"].column,
  .ui.grid > [class*="eight wide"].column,
  .ui.column.grid > [class*="eight wide"].column {
    width: 50% !important;
  }
  .ui.grid > .row > [class*="nine wide"].column,
  .ui.grid > .column.row > [class*="nine wide"].column,
  .ui.grid > [class*="nine wide"].column,
  .ui.column.grid > [class*="nine wide"].column {
    width: 56.25% !important;
  }
  .ui.grid > .row > [class*="ten wide"].column,
  .ui.grid > .column.row > [class*="ten wide"].column,
  .ui.grid > [class*="ten wide"].column,
  .ui.column.grid > [class*="ten wide"].column {
    width: 62.5% !important;
  }
  .ui.grid > .row > [class*="eleven wide"].column,
  .ui.grid > .column.row > [class*="eleven wide"].column,
  .ui.grid > [class*="eleven wide"].column,
  .ui.column.grid > [class*="eleven wide"].column {
    width: 68.75% !important;
  }
  .ui.grid > .row > [class*="twelve wide"].column,
  .ui.grid > .column.row > [class*="twelve wide"].column,
  .ui.grid > [class*="twelve wide"].column,
  .ui.column.grid > [class*="twelve wide"].column {
    width: 75% !important;
  }
  .ui.grid > .row > [class*="thirteen wide"].column,
  .ui.grid > .column.row > [class*="thirteen wide"].column,
  .ui.grid > [class*="thirteen wide"].column,
  .ui.column.grid > [class*="thirteen wide"].column {
    width: 81.25% !important;
  }
  .ui.grid > .row > [class*="fourteen wide"].column,
  .ui.grid > .column.row > [class*="fourteen wide"].column,
  .ui.grid > [class*="fourteen wide"].column,
  .ui.column.grid > [class*="fourteen wide"].column {
    width: 87.5% !important;
  }
  .ui.grid > .row > [class*="fifteen wide"].column,
  .ui.grid > .column.row > [class*="fifteen wide"].column,
  .ui.grid > [class*="fifteen wide"].column,
  .ui.column.grid > [class*="fifteen wide"].column {
    width: 93.75% !important;
  }
  .ui.grid > .row > [class*="sixteen wide"].column,
  .ui.grid > .column.row > [class*="sixteen wide"].column,
  .ui.grid > [class*="sixteen wide"].column,
  .ui.column.grid > [class*="sixteen wide"].column {
    width: 100% !important;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .ui.grid > .row > [class*="one wide mobile"].column,
    .ui.grid > .column.row > [class*="one wide mobile"].column,
    .ui.grid > [class*="one wide mobile"].column,
    .ui.column.grid > [class*="one wide mobile"].column {
      width: 6.25% !important;
    }
    .ui.grid > .row > [class*="two wide mobile"].column,
    .ui.grid > .column.row > [class*="two wide mobile"].column,
    .ui.grid > [class*="two wide mobile"].column,
    .ui.column.grid > [class*="two wide mobile"].column {
      width: 12.5% !important;
    }
    .ui.grid > .row > [class*="three wide mobile"].column,
    .ui.grid > .column.row > [class*="three wide mobile"].column,
    .ui.grid > [class*="three wide mobile"].column,
    .ui.column.grid > [class*="three wide mobile"].column {
      width: 18.75% !important;
    }
    .ui.grid > .row > [class*="four wide mobile"].column,
    .ui.grid > .column.row > [class*="four wide mobile"].column,
    .ui.grid > [class*="four wide mobile"].column,
    .ui.column.grid > [class*="four wide mobile"].column {
      width: 25% !important;
    }
    .ui.grid > .row > [class*="five wide mobile"].column,
    .ui.grid > .column.row > [class*="five wide mobile"].column,
    .ui.grid > [class*="five wide mobile"].column,
    .ui.column.grid > [class*="five wide mobile"].column {
      width: 31.25% !important;
    }
    .ui.grid > .row > [class*="six wide mobile"].column,
    .ui.grid > .column.row > [class*="six wide mobile"].column,
    .ui.grid > [class*="six wide mobile"].column,
    .ui.column.grid > [class*="six wide mobile"].column {
      width: 37.5% !important;
    }
    .ui.grid > .row > [class*="seven wide mobile"].column,
    .ui.grid > .column.row > [class*="seven wide mobile"].column,
    .ui.grid > [class*="seven wide mobile"].column,
    .ui.column.grid > [class*="seven wide mobile"].column {
      width: 43.75% !important;
    }
    .ui.grid > .row > [class*="eight wide mobile"].column,
    .ui.grid > .column.row > [class*="eight wide mobile"].column,
    .ui.grid > [class*="eight wide mobile"].column,
    .ui.column.grid > [class*="eight wide mobile"].column {
      width: 50% !important;
    }
    .ui.grid > .row > [class*="nine wide mobile"].column,
    .ui.grid > .column.row > [class*="nine wide mobile"].column,
    .ui.grid > [class*="nine wide mobile"].column,
    .ui.column.grid > [class*="nine wide mobile"].column {
      width: 56.25% !important;
    }
    .ui.grid > .row > [class*="ten wide mobile"].column,
    .ui.grid > .column.row > [class*="ten wide mobile"].column,
    .ui.grid > [class*="ten wide mobile"].column,
    .ui.column.grid > [class*="ten wide mobile"].column {
      width: 62.5% !important;
    }
    .ui.grid > .row > [class*="eleven wide mobile"].column,
    .ui.grid > .column.row > [class*="eleven wide mobile"].column,
    .ui.grid > [class*="eleven wide mobile"].column,
    .ui.column.grid > [class*="eleven wide mobile"].column {
      width: 68.75% !important;
    }
    .ui.grid > .row > [class*="twelve wide mobile"].column,
    .ui.grid > .column.row > [class*="twelve wide mobile"].column,
    .ui.grid > [class*="twelve wide mobile"].column,
    .ui.column.grid > [class*="twelve wide mobile"].column {
      width: 75% !important;
    }
    .ui.grid > .row > [class*="thirteen wide mobile"].column,
    .ui.grid > .column.row > [class*="thirteen wide mobile"].column,
    .ui.grid > [class*="thirteen wide mobile"].column,
    .ui.column.grid > [class*="thirteen wide mobile"].column {
      width: 81.25% !important;
    }
    .ui.grid > .row > [class*="fourteen wide mobile"].column,
    .ui.grid > .column.row > [class*="fourteen wide mobile"].column,
    .ui.grid > [class*="fourteen wide mobile"].column,
    .ui.column.grid > [class*="fourteen wide mobile"].column {
      width: 87.5% !important;
    }
    .ui.grid > .row > [class*="fifteen wide mobile"].column,
    .ui.grid > .column.row > [class*="fifteen wide mobile"].column,
    .ui.grid > [class*="fifteen wide mobile"].column,
    .ui.column.grid > [class*="fifteen wide mobile"].column {
      width: 93.75% !important;
    }
    .ui.grid > .row > [class*="sixteen wide mobile"].column,
    .ui.grid > .column.row > [class*="sixteen wide mobile"].column,
    .ui.grid > [class*="sixteen wide mobile"].column,
    .ui.column.grid > [class*="sixteen wide mobile"].column {
      width: 100% !important;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .ui.grid > .row > [class*="one wide tablet"].column,
    .ui.grid > .column.row > [class*="one wide tablet"].column,
    .ui.grid > [class*="one wide tablet"].column,
    .ui.column.grid > [class*="one wide tablet"].column {
      width: 6.25% !important;
    }
    .ui.grid > .row > [class*="two wide tablet"].column,
    .ui.grid > .column.row > [class*="two wide tablet"].column,
    .ui.grid > [class*="two wide tablet"].column,
    .ui.column.grid > [class*="two wide tablet"].column {
      width: 12.5% !important;
    }
    .ui.grid > .row > [class*="three wide tablet"].column,
    .ui.grid > .column.row > [class*="three wide tablet"].column,
    .ui.grid > [class*="three wide tablet"].column,
    .ui.column.grid > [class*="three wide tablet"].column {
      width: 18.75% !important;
    }
    .ui.grid > .row > [class*="four wide tablet"].column,
    .ui.grid > .column.row > [class*="four wide tablet"].column,
    .ui.grid > [class*="four wide tablet"].column,
    .ui.column.grid > [class*="four wide tablet"].column {
      width: 25% !important;
    }
    .ui.grid > .row > [class*="five wide tablet"].column,
    .ui.grid > .column.row > [class*="five wide tablet"].column,
    .ui.grid > [class*="five wide tablet"].column,
    .ui.column.grid > [class*="five wide tablet"].column {
      width: 31.25% !important;
    }
    .ui.grid > .row > [class*="six wide tablet"].column,
    .ui.grid > .column.row > [class*="six wide tablet"].column,
    .ui.grid > [class*="six wide tablet"].column,
    .ui.column.grid > [class*="six wide tablet"].column {
      width: 37.5% !important;
    }
    .ui.grid > .row > [class*="seven wide tablet"].column,
    .ui.grid > .column.row > [class*="seven wide tablet"].column,
    .ui.grid > [class*="seven wide tablet"].column,
    .ui.column.grid > [class*="seven wide tablet"].column {
      width: 43.75% !important;
    }
    .ui.grid > .row > [class*="eight wide tablet"].column,
    .ui.grid > .column.row > [class*="eight wide tablet"].column,
    .ui.grid > [class*="eight wide tablet"].column,
    .ui.column.grid > [class*="eight wide tablet"].column {
      width: 50% !important;
    }
    .ui.grid > .row > [class*="nine wide tablet"].column,
    .ui.grid > .column.row > [class*="nine wide tablet"].column,
    .ui.grid > [class*="nine wide tablet"].column,
    .ui.column.grid > [class*="nine wide tablet"].column {
      width: 56.25% !important;
    }
    .ui.grid > .row > [class*="ten wide tablet"].column,
    .ui.grid > .column.row > [class*="ten wide tablet"].column,
    .ui.grid > [class*="ten wide tablet"].column,
    .ui.column.grid > [class*="ten wide tablet"].column {
      width: 62.5% !important;
    }
    .ui.grid > .row > [class*="eleven wide tablet"].column,
    .ui.grid > .column.row > [class*="eleven wide tablet"].column,
    .ui.grid > [class*="eleven wide tablet"].column,
    .ui.column.grid > [class*="eleven wide tablet"].column {
      width: 68.75% !important;
    }
    .ui.grid > .row > [class*="twelve wide tablet"].column,
    .ui.grid > .column.row > [class*="twelve wide tablet"].column,
    .ui.grid > [class*="twelve wide tablet"].column,
    .ui.column.grid > [class*="twelve wide tablet"].column {
      width: 75% !important;
    }
    .ui.grid > .row > [class*="thirteen wide tablet"].column,
    .ui.grid > .column.row > [class*="thirteen wide tablet"].column,
    .ui.grid > [class*="thirteen wide tablet"].column,
    .ui.column.grid > [class*="thirteen wide tablet"].column {
      width: 81.25% !important;
    }
    .ui.grid > .row > [class*="fourteen wide tablet"].column,
    .ui.grid > .column.row > [class*="fourteen wide tablet"].column,
    .ui.grid > [class*="fourteen wide tablet"].column,
    .ui.column.grid > [class*="fourteen wide tablet"].column {
      width: 87.5% !important;
    }
    .ui.grid > .row > [class*="fifteen wide tablet"].column,
    .ui.grid > .column.row > [class*="fifteen wide tablet"].column,
    .ui.grid > [class*="fifteen wide tablet"].column,
    .ui.column.grid > [class*="fifteen wide tablet"].column {
      width: 93.75% !important;
    }
    .ui.grid > .row > [class*="sixteen wide tablet"].column,
    .ui.grid > .column.row > [class*="sixteen wide tablet"].column,
    .ui.grid > [class*="sixteen wide tablet"].column,
    .ui.column.grid > [class*="sixteen wide tablet"].column {
      width: 100% !important;
    }
  }

  @media only screen and (min-width: 992px) {
    .ui.grid > .row > [class*="one wide computer"].column,
    .ui.grid > .column.row > [class*="one wide computer"].column,
    .ui.grid > [class*="one wide computer"].column,
    .ui.column.grid > [class*="one wide computer"].column {
      width: 6.25% !important;
    }
    .ui.grid > .row > [class*="two wide computer"].column,
    .ui.grid > .column.row > [class*="two wide computer"].column,
    .ui.grid > [class*="two wide computer"].column,
    .ui.column.grid > [class*="two wide computer"].column {
      width: 12.5% !important;
    }
    .ui.grid > .row > [class*="three wide computer"].column,
    .ui.grid > .column.row > [class*="three wide computer"].column,
    .ui.grid > [class*="three wide computer"].column,
    .ui.column.grid > [class*="three wide computer"].column {
      width: 18.75% !important;
    }
    .ui.grid > .row > [class*="four wide computer"].column,
    .ui.grid > .column.row > [class*="four wide computer"].column,
    .ui.grid > [class*="four wide computer"].column,
    .ui.column.grid > [class*="four wide computer"].column {
      width: 25% !important;
    }
    .ui.grid > .row > [class*="five wide computer"].column,
    .ui.grid > .column.row > [class*="five wide computer"].column,
    .ui.grid > [class*="five wide computer"].column,
    .ui.column.grid > [class*="five wide computer"].column {
      width: 31.25% !important;
    }
    .ui.grid > .row > [class*="six wide computer"].column,
    .ui.grid > .column.row > [class*="six wide computer"].column,
    .ui.grid > [class*="six wide computer"].column,
    .ui.column.grid > [class*="six wide computer"].column {
      width: 37.5% !important;
    }
    .ui.grid > .row > [class*="seven wide computer"].column,
    .ui.grid > .column.row > [class*="seven wide computer"].column,
    .ui.grid > [class*="seven wide computer"].column,
    .ui.column.grid > [class*="seven wide computer"].column {
      width: 43.75% !important;
    }
    .ui.grid > .row > [class*="eight wide computer"].column,
    .ui.grid > .column.row > [class*="eight wide computer"].column,
    .ui.grid > [class*="eight wide computer"].column,
    .ui.column.grid > [class*="eight wide computer"].column {
      width: 50% !important;
    }
    .ui.grid > .row > [class*="nine wide computer"].column,
    .ui.grid > .column.row > [class*="nine wide computer"].column,
    .ui.grid > [class*="nine wide computer"].column,
    .ui.column.grid > [class*="nine wide computer"].column {
      width: 56.25% !important;
    }
    .ui.grid > .row > [class*="ten wide computer"].column,
    .ui.grid > .column.row > [class*="ten wide computer"].column,
    .ui.grid > [class*="ten wide computer"].column,
    .ui.column.grid > [class*="ten wide computer"].column {
      width: 62.5% !important;
    }
    .ui.grid > .row > [class*="eleven wide computer"].column,
    .ui.grid > .column.row > [class*="eleven wide computer"].column,
    .ui.grid > [class*="eleven wide computer"].column,
    .ui.column.grid > [class*="eleven wide computer"].column {
      width: 68.75% !important;
    }
    .ui.grid > .row > [class*="twelve wide computer"].column,
    .ui.grid > .column.row > [class*="twelve wide computer"].column,
    .ui.grid > [class*="twelve wide computer"].column,
    .ui.column.grid > [class*="twelve wide computer"].column {
      width: 75% !important;
    }
    .ui.grid > .row > [class*="thirteen wide computer"].column,
    .ui.grid > .column.row > [class*="thirteen wide computer"].column,
    .ui.grid > [class*="thirteen wide computer"].column,
    .ui.column.grid > [class*="thirteen wide computer"].column {
      width: 81.25% !important;
    }
    .ui.grid > .row > [class*="fourteen wide computer"].column,
    .ui.grid > .column.row > [class*="fourteen wide computer"].column,
    .ui.grid > [class*="fourteen wide computer"].column,
    .ui.column.grid > [class*="fourteen wide computer"].column {
      width: 87.5% !important;
    }
    .ui.grid > .row > [class*="fifteen wide computer"].column,
    .ui.grid > .column.row > [class*="fifteen wide computer"].column,
    .ui.grid > [class*="fifteen wide computer"].column,
    .ui.column.grid > [class*="fifteen wide computer"].column {
      width: 93.75% !important;
    }
    .ui.grid > .row > [class*="sixteen wide computer"].column,
    .ui.grid > .column.row > [class*="sixteen wide computer"].column,
    .ui.grid > [class*="sixteen wide computer"].column,
    .ui.column.grid > [class*="sixteen wide computer"].column {
      width: 100% !important;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    .ui.grid > .row > [class*="one wide large screen"].column,
    .ui.grid > .column.row > [class*="one wide large screen"].column,
    .ui.grid > [class*="one wide large screen"].column,
    .ui.column.grid > [class*="one wide large screen"].column {
      width: 6.25% !important;
    }
    .ui.grid > .row > [class*="two wide large screen"].column,
    .ui.grid > .column.row > [class*="two wide large screen"].column,
    .ui.grid > [class*="two wide large screen"].column,
    .ui.column.grid > [class*="two wide large screen"].column {
      width: 12.5% !important;
    }
    .ui.grid > .row > [class*="three wide large screen"].column,
    .ui.grid > .column.row > [class*="three wide large screen"].column,
    .ui.grid > [class*="three wide large screen"].column,
    .ui.column.grid > [class*="three wide large screen"].column {
      width: 18.75% !important;
    }
    .ui.grid > .row > [class*="four wide large screen"].column,
    .ui.grid > .column.row > [class*="four wide large screen"].column,
    .ui.grid > [class*="four wide large screen"].column,
    .ui.column.grid > [class*="four wide large screen"].column {
      width: 25% !important;
    }
    .ui.grid > .row > [class*="five wide large screen"].column,
    .ui.grid > .column.row > [class*="five wide large screen"].column,
    .ui.grid > [class*="five wide large screen"].column,
    .ui.column.grid > [class*="five wide large screen"].column {
      width: 31.25% !important;
    }
    .ui.grid > .row > [class*="six wide large screen"].column,
    .ui.grid > .column.row > [class*="six wide large screen"].column,
    .ui.grid > [class*="six wide large screen"].column,
    .ui.column.grid > [class*="six wide large screen"].column {
      width: 37.5% !important;
    }
    .ui.grid > .row > [class*="seven wide large screen"].column,
    .ui.grid > .column.row > [class*="seven wide large screen"].column,
    .ui.grid > [class*="seven wide large screen"].column,
    .ui.column.grid > [class*="seven wide large screen"].column {
      width: 43.75% !important;
    }
    .ui.grid > .row > [class*="eight wide large screen"].column,
    .ui.grid > .column.row > [class*="eight wide large screen"].column,
    .ui.grid > [class*="eight wide large screen"].column,
    .ui.column.grid > [class*="eight wide large screen"].column {
      width: 50% !important;
    }
    .ui.grid > .row > [class*="nine wide large screen"].column,
    .ui.grid > .column.row > [class*="nine wide large screen"].column,
    .ui.grid > [class*="nine wide large screen"].column,
    .ui.column.grid > [class*="nine wide large screen"].column {
      width: 56.25% !important;
    }
    .ui.grid > .row > [class*="ten wide large screen"].column,
    .ui.grid > .column.row > [class*="ten wide large screen"].column,
    .ui.grid > [class*="ten wide large screen"].column,
    .ui.column.grid > [class*="ten wide large screen"].column {
      width: 62.5% !important;
    }
    .ui.grid > .row > [class*="eleven wide large screen"].column,
    .ui.grid > .column.row > [class*="eleven wide large screen"].column,
    .ui.grid > [class*="eleven wide large screen"].column,
    .ui.column.grid > [class*="eleven wide large screen"].column {
      width: 68.75% !important;
    }
    .ui.grid > .row > [class*="twelve wide large screen"].column,
    .ui.grid > .column.row > [class*="twelve wide large screen"].column,
    .ui.grid > [class*="twelve wide large screen"].column,
    .ui.column.grid > [class*="twelve wide large screen"].column {
      width: 75% !important;
    }
    .ui.grid > .row > [class*="thirteen wide large screen"].column,
    .ui.grid > .column.row > [class*="thirteen wide large screen"].column,
    .ui.grid > [class*="thirteen wide large screen"].column,
    .ui.column.grid > [class*="thirteen wide large screen"].column {
      width: 81.25% !important;
    }
    .ui.grid > .row > [class*="fourteen wide large screen"].column,
    .ui.grid > .column.row > [class*="fourteen wide large screen"].column,
    .ui.grid > [class*="fourteen wide large screen"].column,
    .ui.column.grid > [class*="fourteen wide large screen"].column {
      width: 87.5% !important;
    }
    .ui.grid > .row > [class*="fifteen wide large screen"].column,
    .ui.grid > .column.row > [class*="fifteen wide large screen"].column,
    .ui.grid > [class*="fifteen wide large screen"].column,
    .ui.column.grid > [class*="fifteen wide large screen"].column {
      width: 93.75% !important;
    }
    .ui.grid > .row > [class*="sixteen wide large screen"].column,
    .ui.grid > .column.row > [class*="sixteen wide large screen"].column,
    .ui.grid > [class*="sixteen wide large screen"].column,
    .ui.column.grid > [class*="sixteen wide large screen"].column {
      width: 100% !important;
    }
  }

  @media only screen and (min-width: 1920px) {
    .ui.grid > .row > [class*="one wide widescreen"].column,
    .ui.grid > .column.row > [class*="one wide widescreen"].column,
    .ui.grid > [class*="one wide widescreen"].column,
    .ui.column.grid > [class*="one wide widescreen"].column {
      width: 6.25% !important;
    }
    .ui.grid > .row > [class*="two wide widescreen"].column,
    .ui.grid > .column.row > [class*="two wide widescreen"].column,
    .ui.grid > [class*="two wide widescreen"].column,
    .ui.column.grid > [class*="two wide widescreen"].column {
      width: 12.5% !important;
    }
    .ui.grid > .row > [class*="three wide widescreen"].column,
    .ui.grid > .column.row > [class*="three wide widescreen"].column,
    .ui.grid > [class*="three wide widescreen"].column,
    .ui.column.grid > [class*="three wide widescreen"].column {
      width: 18.75% !important;
    }
    .ui.grid > .row > [class*="four wide widescreen"].column,
    .ui.grid > .column.row > [class*="four wide widescreen"].column,
    .ui.grid > [class*="four wide widescreen"].column,
    .ui.column.grid > [class*="four wide widescreen"].column {
      width: 25% !important;
    }
    .ui.grid > .row > [class*="five wide widescreen"].column,
    .ui.grid > .column.row > [class*="five wide widescreen"].column,
    .ui.grid > [class*="five wide widescreen"].column,
    .ui.column.grid > [class*="five wide widescreen"].column {
      width: 31.25% !important;
    }
    .ui.grid > .row > [class*="six wide widescreen"].column,
    .ui.grid > .column.row > [class*="six wide widescreen"].column,
    .ui.grid > [class*="six wide widescreen"].column,
    .ui.column.grid > [class*="six wide widescreen"].column {
      width: 37.5% !important;
    }
    .ui.grid > .row > [class*="seven wide widescreen"].column,
    .ui.grid > .column.row > [class*="seven wide widescreen"].column,
    .ui.grid > [class*="seven wide widescreen"].column,
    .ui.column.grid > [class*="seven wide widescreen"].column {
      width: 43.75% !important;
    }
    .ui.grid > .row > [class*="eight wide widescreen"].column,
    .ui.grid > .column.row > [class*="eight wide widescreen"].column,
    .ui.grid > [class*="eight wide widescreen"].column,
    .ui.column.grid > [class*="eight wide widescreen"].column {
      width: 50% !important;
    }
    .ui.grid > .row > [class*="nine wide widescreen"].column,
    .ui.grid > .column.row > [class*="nine wide widescreen"].column,
    .ui.grid > [class*="nine wide widescreen"].column,
    .ui.column.grid > [class*="nine wide widescreen"].column {
      width: 56.25% !important;
    }
    .ui.grid > .row > [class*="ten wide widescreen"].column,
    .ui.grid > .column.row > [class*="ten wide widescreen"].column,
    .ui.grid > [class*="ten wide widescreen"].column,
    .ui.column.grid > [class*="ten wide widescreen"].column {
      width: 62.5% !important;
    }
    .ui.grid > .row > [class*="eleven wide widescreen"].column,
    .ui.grid > .column.row > [class*="eleven wide widescreen"].column,
    .ui.grid > [class*="eleven wide widescreen"].column,
    .ui.column.grid > [class*="eleven wide widescreen"].column {
      width: 68.75% !important;
    }
    .ui.grid > .row > [class*="twelve wide widescreen"].column,
    .ui.grid > .column.row > [class*="twelve wide widescreen"].column,
    .ui.grid > [class*="twelve wide widescreen"].column,
    .ui.column.grid > [class*="twelve wide widescreen"].column {
      width: 75% !important;
    }
    .ui.grid > .row > [class*="thirteen wide widescreen"].column,
    .ui.grid > .column.row > [class*="thirteen wide widescreen"].column,
    .ui.grid > [class*="thirteen wide widescreen"].column,
    .ui.column.grid > [class*="thirteen wide widescreen"].column {
      width: 81.25% !important;
    }
    .ui.grid > .row > [class*="fourteen wide widescreen"].column,
    .ui.grid > .column.row > [class*="fourteen wide widescreen"].column,
    .ui.grid > [class*="fourteen wide widescreen"].column,
    .ui.column.grid > [class*="fourteen wide widescreen"].column {
      width: 87.5% !important;
    }
    .ui.grid > .row > [class*="fifteen wide widescreen"].column,
    .ui.grid > .column.row > [class*="fifteen wide widescreen"].column,
    .ui.grid > [class*="fifteen wide widescreen"].column,
    .ui.column.grid > [class*="fifteen wide widescreen"].column {
      width: 93.75% !important;
    }
    .ui.grid > .row > [class*="sixteen wide widescreen"].column,
    .ui.grid > .column.row > [class*="sixteen wide widescreen"].column,
    .ui.grid > [class*="sixteen wide widescreen"].column,
    .ui.column.grid > [class*="sixteen wide widescreen"].column {
      width: 100% !important;
    }
  }

  .ui.centered.grid,
  .ui.centered.grid > .row,
  .ui.grid > .centered.row {
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .ui.centered.grid > .column:not(.aligned):not(.justified):not(.row),
  .ui.centered.grid > .row > .column:not(.aligned):not(.justified),
  .ui.grid .centered.row > .column:not(.aligned):not(.justified) {
    text-align: left;
  }
  .ui.grid > .centered.column,
  .ui.grid > .row > .centered.column {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .ui.relaxed.grid > .column:not(.row),
  .ui.relaxed.grid > .row > .column,
  .ui.grid > .relaxed.row > .column {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .ui[class*="very relaxed"].grid > .column:not(.row),
  .ui[class*="very relaxed"].grid > .row > .column,
  .ui.grid > [class*="very relaxed"].row > .column {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .ui.relaxed.grid .row + .ui.divider,
  .ui.grid .relaxed.row + .ui.divider {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .ui[class*="very relaxed"].grid .row + .ui.divider,
  .ui.grid [class*="very relaxed"].row + .ui.divider {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  .ui.padded.grid:not(.vertically):not(.horizontally) {
    margin: 0em !important;
  }
  [class*="horizontally padded"].ui.grid {
    margin-left: 0em !important;
    margin-right: 0em !important;
  }
  [class*="vertically padded"].ui.grid {
    margin-top: 0em !important;
    margin-bottom: 0em !important;
  }

  .ui.grid [class*="left floated"].column {
    margin-right: auto;
  }
  .ui.grid [class*="right floated"].column {
    margin-left: auto;
  }

  .ui.divided.grid:not([class*="vertically divided"]) > .column:not(.row),
  .ui.divided.grid:not([class*="vertically divided"]) > .row > .column {
    -webkit-box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
    box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
  }

  .ui[class*="vertically divided"].grid > .column:not(.row),
  .ui[class*="vertically divided"].grid > .row > .column {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  .ui[class*="vertically divided"].grid > .row {
    margin-top: 0em;
    margin-bottom: 0em;
  }

  .ui.divided.grid:not([class*="vertically divided"]) > .column:first-child,
  .ui.divided.grid:not([class*="vertically divided"])
    > .row
    > .column:first-child {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui[class*="vertically divided"].grid > .row:first-child > .column {
    margin-top: 0em;
  }

  .ui.grid > .divided.row > .column {
    -webkit-box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
    box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
  }
  .ui.grid > .divided.row > .column:first-child {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui[class*="vertically divided"].grid > .row {
    position: relative;
  }
  .ui[class*="vertically divided"].grid > .row:before {
    position: absolute;
    content: "";
    top: 0em;
    left: 0px;
    width: calc(100% - 2rem);
    height: 1px;
    margin: 0% 1rem;
    -webkit-box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
    box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
  }

  [class*="horizontally padded"].ui.divided.grid,
  .ui.padded.divided.grid:not(.vertically):not(.horizontally) {
    width: 100%;
  }

  .ui[class*="vertically divided"].grid > .row:first-child:before {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui.inverted.divided.grid:not([class*="vertically divided"])
    > .column:not(.row),
  .ui.inverted.divided.grid:not([class*="vertically divided"])
    > .row
    > .column {
    -webkit-box-shadow: -1px 0px 0px 0px rgba(255, 255, 255, 0.1);
    box-shadow: -1px 0px 0px 0px rgba(255, 255, 255, 0.1);
  }
  .ui.inverted.divided.grid:not([class*="vertically divided"])
    > .column:not(.row):first-child,
  .ui.inverted.divided.grid:not([class*="vertically divided"])
    > .row
    > .column:first-child {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.inverted[class*="vertically divided"].grid > .row:before {
    -webkit-box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.1);
    box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.1);
  }

  .ui.relaxed[class*="vertically divided"].grid > .row:before {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    width: calc(100% - 3rem);
  }
  .ui[class*="very relaxed"][class*="vertically divided"].grid > .row:before {
    margin-left: 5rem;
    margin-right: 5rem;
    width: calc(100% - 5rem);
  }

  .ui.celled.grid {
    width: 100%;
    margin: 1em 0em;
    -webkit-box-shadow: 0px 0px 0px 1px #d4d4d5;
    box-shadow: 0px 0px 0px 1px #d4d4d5;
  }
  .ui.celled.grid > .row {
    width: 100% !important;
    margin: 0em;
    padding: 0em;
    -webkit-box-shadow: 0px -1px 0px 0px #d4d4d5;
    box-shadow: 0px -1px 0px 0px #d4d4d5;
  }
  .ui.celled.grid > .column:not(.row),
  .ui.celled.grid > .row > .column {
    -webkit-box-shadow: -1px 0px 0px 0px #d4d4d5;
    box-shadow: -1px 0px 0px 0px #d4d4d5;
  }
  .ui.celled.grid > .column:first-child,
  .ui.celled.grid > .row > .column:first-child {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.celled.grid > .column:not(.row),
  .ui.celled.grid > .row > .column {
    padding: 1em;
  }
  .ui.relaxed.celled.grid > .column:not(.row),
  .ui.relaxed.celled.grid > .row > .column {
    padding: 1.5em;
  }
  .ui[class*="very relaxed"].celled.grid > .column:not(.row),
  .ui[class*="very relaxed"].celled.grid > .row > .column {
    padding: 2em;
  }

  .ui[class*="internally celled"].grid {
    -webkit-box-shadow: none;
    box-shadow: none;
    margin: 0em;
  }
  .ui[class*="internally celled"].grid > .row:first-child {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui[class*="internally celled"].grid > .row > .column:first-child {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ui[class*="top aligned"].grid > .column:not(.row),
  .ui[class*="top aligned"].grid > .row > .column,
  .ui.grid > [class*="top aligned"].row > .column,
  .ui.grid > [class*="top aligned"].column:not(.row),
  .ui.grid > .row > [class*="top aligned"].column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    vertical-align: top;
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }

  .ui[class*="middle aligned"].grid > .column:not(.row),
  .ui[class*="middle aligned"].grid > .row > .column,
  .ui.grid > [class*="middle aligned"].row > .column,
  .ui.grid > [class*="middle aligned"].column:not(.row),
  .ui.grid > .row > [class*="middle aligned"].column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    vertical-align: middle;
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }

  .ui[class*="bottom aligned"].grid > .column:not(.row),
  .ui[class*="bottom aligned"].grid > .row > .column,
  .ui.grid > [class*="bottom aligned"].row > .column,
  .ui.grid > [class*="bottom aligned"].column:not(.row),
  .ui.grid > .row > [class*="bottom aligned"].column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    vertical-align: bottom;
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }

  .ui.stretched.grid > .row > .column,
  .ui.stretched.grid > .column,
  .ui.grid > .stretched.row > .column,
  .ui.grid > .stretched.column:not(.row),
  .ui.grid > .row > .stretched.column {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .ui.stretched.grid > .row > .column > *,
  .ui.stretched.grid > .column > *,
  .ui.grid > .stretched.row > .column > *,
  .ui.grid > .stretched.column:not(.row) > *,
  .ui.grid > .row > .stretched.column > * {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .ui[class*="left aligned"].grid > .column,
  .ui[class*="left aligned"].grid > .row > .column,
  .ui.grid > [class*="left aligned"].row > .column,
  .ui.grid > [class*="left aligned"].column.column,
  .ui.grid > .row > [class*="left aligned"].column.column {
    text-align: left;
    -ms-flex-item-align: inherit;
    align-self: inherit;
  }

  .ui[class*="center aligned"].grid > .column,
  .ui[class*="center aligned"].grid > .row > .column,
  .ui.grid > [class*="center aligned"].row > .column,
  .ui.grid > [class*="center aligned"].column.column,
  .ui.grid > .row > [class*="center aligned"].column.column {
    text-align: center;
    -ms-flex-item-align: inherit;
    align-self: inherit;
  }
  .ui[class*="center aligned"].grid {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .ui[class*="right aligned"].grid > .column,
  .ui[class*="right aligned"].grid > .row > .column,
  .ui.grid > [class*="right aligned"].row > .column,
  .ui.grid > [class*="right aligned"].column.column,
  .ui.grid > .row > [class*="right aligned"].column.column {
    text-align: right;
    -ms-flex-item-align: inherit;
    align-self: inherit;
  }

  .ui.justified.grid > .column,
  .ui.justified.grid > .row > .column,
  .ui.grid > .justified.row > .column,
  .ui.grid > .justified.column.column,
  .ui.grid > .row > .justified.column.column {
    text-align: justify;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }

  .ui.grid > .row > .red.column,
  .ui.grid > .row > .orange.column,
  .ui.grid > .row > .yellow.column,
  .ui.grid > .row > .olive.column,
  .ui.grid > .row > .green.column,
  .ui.grid > .row > .teal.column,
  .ui.grid > .row > .blue.column,
  .ui.grid > .row > .violet.column,
  .ui.grid > .row > .purple.column,
  .ui.grid > .row > .pink.column,
  .ui.grid > .row > .brown.column,
  .ui.grid > .row > .grey.column,
  .ui.grid > .row > .black.column {
    margin-top: -1rem;
    margin-bottom: -1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .ui.grid > .red.row,
  .ui.grid > .red.column,
  .ui.grid > .row > .red.column {
    background-color: #db2828 !important;
    color: #ffffff;
  }

  .ui.grid > .orange.row,
  .ui.grid > .orange.column,
  .ui.grid > .row > .orange.column {
    background-color: #f2711c !important;
    color: #ffffff;
  }

  .ui.grid > .yellow.row,
  .ui.grid > .yellow.column,
  .ui.grid > .row > .yellow.column {
    background-color: #fbbd08 !important;
    color: #ffffff;
  }

  .ui.grid > .olive.row,
  .ui.grid > .olive.column,
  .ui.grid > .row > .olive.column {
    background-color: #b5cc18 !important;
    color: #ffffff;
  }

  .ui.grid > .green.row,
  .ui.grid > .green.column,
  .ui.grid > .row > .green.column {
    background-color: #21ba45 !important;
    color: #ffffff;
  }

  .ui.grid > .teal.row,
  .ui.grid > .teal.column,
  .ui.grid > .row > .teal.column {
    background-color: #00b5ad !important;
    color: #ffffff;
  }

  .ui.grid > .blue.row,
  .ui.grid > .blue.column,
  .ui.grid > .row > .blue.column {
    background-color: #2185d0 !important;
    color: #ffffff;
  }

  .ui.grid > .violet.row,
  .ui.grid > .violet.column,
  .ui.grid > .row > .violet.column {
    background-color: #6435c9 !important;
    color: #ffffff;
  }

  .ui.grid > .purple.row,
  .ui.grid > .purple.column,
  .ui.grid > .row > .purple.column {
    background-color: #a333c8 !important;
    color: #ffffff;
  }

  .ui.grid > .pink.row,
  .ui.grid > .pink.column,
  .ui.grid > .row > .pink.column {
    background-color: #e03997 !important;
    color: #ffffff;
  }

  .ui.grid > .brown.row,
  .ui.grid > .brown.column,
  .ui.grid > .row > .brown.column {
    background-color: #a5673f !important;
    color: #ffffff;
  }

  .ui.grid > .grey.row,
  .ui.grid > .grey.column,
  .ui.grid > .row > .grey.column {
    background-color: #767676 !important;
    color: #ffffff;
  }

  .ui.grid > .black.row,
  .ui.grid > .black.column,
  .ui.grid > .row > .black.column {
    background-color: #1b1c1d !important;
    color: #ffffff;
  }

  .ui[class*="equal width"].grid > .column:not(.row),
  .ui[class*="equal width"].grid > .row > .column,
  .ui.grid > [class*="equal width"].row > .column {
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .ui[class*="equal width"].grid > .wide.column,
  .ui[class*="equal width"].grid > .row > .wide.column,
  .ui.grid > [class*="equal width"].row > .wide.column {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
  }

  @media only screen and (max-width: 767px) {
    .ui[class*="mobile reversed"].grid,
    .ui[class*="mobile reversed"].grid > .row,
    .ui.grid > [class*="mobile reversed"].row {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
    .ui[class*="mobile vertically reversed"].grid,
    .ui.stackable[class*="mobile reversed"] {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }

    .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
      > .column:first-child,
    .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
      > .row
      > .column:first-child {
      -webkit-box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
      box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
    }
    .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
      > .column:last-child,
    .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
      > .row
      > .column:last-child {
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"]
      > .row:first-child:before {
      -webkit-box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
      box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
    }
    .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"]
      > .row:last-child:before {
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    .ui[class*="mobile reversed"].celled.grid > .row > .column:first-child {
      -webkit-box-shadow: -1px 0px 0px 0px #d4d4d5;
      box-shadow: -1px 0px 0px 0px #d4d4d5;
    }
    .ui[class*="mobile reversed"].celled.grid > .row > .column:last-child {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .ui[class*="tablet reversed"].grid,
    .ui[class*="tablet reversed"].grid > .row,
    .ui.grid > [class*="tablet reversed"].row {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
    .ui[class*="tablet vertically reversed"].grid {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }

    .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
      > .column:first-child,
    .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
      > .row
      > .column:first-child {
      -webkit-box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
      box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
    }
    .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
      > .column:last-child,
    .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
      > .row
      > .column:last-child {
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"]
      > .row:first-child:before {
      -webkit-box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
      box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
    }
    .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"]
      > .row:last-child:before {
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    .ui[class*="tablet reversed"].celled.grid > .row > .column:first-child {
      -webkit-box-shadow: -1px 0px 0px 0px #d4d4d5;
      box-shadow: -1px 0px 0px 0px #d4d4d5;
    }
    .ui[class*="tablet reversed"].celled.grid > .row > .column:last-child {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  @media only screen and (min-width: 992px) {
    .ui[class*="computer reversed"].grid,
    .ui[class*="computer reversed"].grid > .row,
    .ui.grid > [class*="computer reversed"].row {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
    .ui[class*="computer vertically reversed"].grid {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }

    .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
      > .column:first-child,
    .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
      > .row
      > .column:first-child {
      -webkit-box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
      box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.15);
    }
    .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
      > .column:last-child,
    .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
      > .row
      > .column:last-child {
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    .ui.grid[class*="vertically divided"][class*="computer vertically reversed"]
      > .row:first-child:before {
      -webkit-box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
      box-shadow: 0px -1px 0px 0px rgba(34, 36, 38, 0.15);
    }
    .ui.grid[class*="vertically divided"][class*="computer vertically reversed"]
      > .row:last-child:before {
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    .ui[class*="computer reversed"].celled.grid > .row > .column:first-child {
      -webkit-box-shadow: -1px 0px 0px 0px #d4d4d5;
      box-shadow: -1px 0px 0px 0px #d4d4d5;
    }
    .ui[class*="computer reversed"].celled.grid > .row > .column:last-child {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .ui.doubling.grid {
      width: auto;
    }
    .ui.grid > .doubling.row,
    .ui.doubling.grid > .row {
      margin: 0em !important;
      padding: 0em !important;
    }
    .ui.grid > .doubling.row > .column,
    .ui.doubling.grid > .row > .column {
      display: inline-block !important;
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      margin: 0em;
    }
    .ui[class*="two column"].doubling.grid > .row > .column,
    .ui[class*="two column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="two column"].doubling.row.row > .column {
      width: 100% !important;
    }
    .ui[class*="three column"].doubling.grid > .row > .column,
    .ui[class*="three column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="three column"].doubling.row.row > .column {
      width: 50% !important;
    }
    .ui[class*="four column"].doubling.grid > .row > .column,
    .ui[class*="four column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="four column"].doubling.row.row > .column {
      width: 50% !important;
    }
    .ui[class*="five column"].doubling.grid > .row > .column,
    .ui[class*="five column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="five column"].doubling.row.row > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="six column"].doubling.grid > .row > .column,
    .ui[class*="six column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="six column"].doubling.row.row > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="seven column"].doubling.grid > .row > .column,
    .ui[class*="seven column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="seven column"].doubling.row.row > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="eight column"].doubling.grid > .row > .column,
    .ui[class*="eight column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="eight column"].doubling.row.row > .column {
      width: 25% !important;
    }
    .ui[class*="nine column"].doubling.grid > .row > .column,
    .ui[class*="nine column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="nine column"].doubling.row.row > .column {
      width: 25% !important;
    }
    .ui[class*="ten column"].doubling.grid > .row > .column,
    .ui[class*="ten column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="ten column"].doubling.row.row > .column {
      width: 20% !important;
    }
    .ui[class*="eleven column"].doubling.grid > .row > .column,
    .ui[class*="eleven column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="eleven column"].doubling.row.row > .column {
      width: 20% !important;
    }
    .ui[class*="twelve column"].doubling.grid > .row > .column,
    .ui[class*="twelve column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="twelve column"].doubling.row.row > .column {
      width: 16.66666667% !important;
    }
    .ui[class*="thirteen column"].doubling.grid > .row > .column,
    .ui[class*="thirteen column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="thirteen column"].doubling.row.row > .column {
      width: 16.66666667% !important;
    }
    .ui[class*="fourteen column"].doubling.grid > .row > .column,
    .ui[class*="fourteen column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="fourteen column"].doubling.row.row > .column {
      width: 14.28571429% !important;
    }
    .ui[class*="fifteen column"].doubling.grid > .row > .column,
    .ui[class*="fifteen column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="fifteen column"].doubling.row.row > .column {
      width: 14.28571429% !important;
    }
    .ui[class*="sixteen column"].doubling.grid > .row > .column,
    .ui[class*="sixteen column"].doubling.grid > .column:not(.row),
    .ui.grid > [class*="sixteen column"].doubling.row.row > .column {
      width: 12.5% !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .ui.grid > .doubling.row,
    .ui.doubling.grid > .row {
      margin: 0em !important;
      padding: 0em !important;
    }
    .ui.grid > .doubling.row > .column,
    .ui.doubling.grid > .row > .column {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
      margin: 0em !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
    .ui[class*="two column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="two column"].doubling:not(.stackable).grid > .column:not(.row),
    .ui.grid
      > [class*="two column"].doubling:not(.stackable).row.row
      > .column {
      width: 100% !important;
    }
    .ui[class*="three column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="three column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="three column"].doubling:not(.stackable).row.row
      > .column {
      width: 50% !important;
    }
    .ui[class*="four column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="four column"].doubling:not(.stackable).grid > .column:not(.row),
    .ui.grid
      > [class*="four column"].doubling:not(.stackable).row.row
      > .column {
      width: 50% !important;
    }
    .ui[class*="five column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="five column"].doubling:not(.stackable).grid > .column:not(.row),
    .ui.grid
      > [class*="five column"].doubling:not(.stackable).row.row
      > .column {
      width: 50% !important;
    }
    .ui[class*="six column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="six column"].doubling:not(.stackable).grid > .column:not(.row),
    .ui.grid
      > [class*="six column"].doubling:not(.stackable).row.row
      > .column {
      width: 50% !important;
    }
    .ui[class*="seven column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="seven column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="seven column"].doubling:not(.stackable).row.row
      > .column {
      width: 50% !important;
    }
    .ui[class*="eight column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="eight column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="eight column"].doubling:not(.stackable).row.row
      > .column {
      width: 50% !important;
    }
    .ui[class*="nine column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="nine column"].doubling:not(.stackable).grid > .column:not(.row),
    .ui.grid
      > [class*="nine column"].doubling:not(.stackable).row.row
      > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="ten column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="ten column"].doubling:not(.stackable).grid > .column:not(.row),
    .ui.grid
      > [class*="ten column"].doubling:not(.stackable).row.row
      > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="eleven column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="eleven column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="eleven column"].doubling:not(.stackable).row.row
      > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="twelve column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="twelve column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="twelve column"].doubling:not(.stackable).row.row
      > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="thirteen column"].doubling:not(.stackable).grid
      > .row
      > .column,
    .ui[class*="thirteen column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="thirteen column"].doubling:not(.stackable).row.row
      > .column {
      width: 33.33333333% !important;
    }
    .ui[class*="fourteen column"].doubling:not(.stackable).grid
      > .row
      > .column,
    .ui[class*="fourteen column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="fourteen column"].doubling:not(.stackable).row.row
      > .column {
      width: 25% !important;
    }
    .ui[class*="fifteen column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="fifteen column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="fifteen column"].doubling:not(.stackable).row.row
      > .column {
      width: 25% !important;
    }
    .ui[class*="sixteen column"].doubling:not(.stackable).grid > .row > .column,
    .ui[class*="sixteen column"].doubling:not(.stackable).grid
      > .column:not(.row),
    .ui.grid
      > [class*="sixteen column"].doubling:not(.stackable).row.row
      > .column {
      width: 25% !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .ui.stackable.grid {
      width: auto;
      margin-left: 0em !important;
      margin-right: 0em !important;
    }
    .ui.stackable.grid > .row > .wide.column,
    .ui.stackable.grid > .wide.column,
    .ui.stackable.grid > .column.grid > .column,
    .ui.stackable.grid > .column.row > .column,
    .ui.stackable.grid > .row > .column,
    .ui.stackable.grid > .column:not(.row),
    .ui.grid > .stackable.stackable.row > .column {
      width: 100% !important;
      margin: 0em 0em !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      padding: 1rem 1rem !important;
    }
    .ui.stackable.grid:not(.vertically) > .row {
      margin: 0em;
      padding: 0em;
    }

    .ui.container > .ui.stackable.grid > .column,
    .ui.container > .ui.stackable.grid > .row > .column {
      padding-left: 0em !important;
      padding-right: 0em !important;
    }

    .ui.grid .ui.stackable.grid,
    .ui.segment:not(.vertical) .ui.stackable.page.grid {
      margin-left: -1rem !important;
      margin-right: -1rem !important;
    }

    .ui.stackable.divided.grid > .row:first-child > .column:first-child,
    .ui.stackable.celled.grid > .row:first-child > .column:first-child,
    .ui.stackable.divided.grid > .column:not(.row):first-child,
    .ui.stackable.celled.grid > .column:not(.row):first-child {
      border-top: none !important;
    }
    .ui.inverted.stackable.celled.grid > .column:not(.row),
    .ui.inverted.stackable.divided.grid > .column:not(.row),
    .ui.inverted.stackable.celled.grid > .row > .column,
    .ui.inverted.stackable.divided.grid > .row > .column {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .ui.stackable.celled.grid > .column:not(.row),
    .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
    .ui.stackable.celled.grid > .row > .column,
    .ui.stackable.divided:not(.vertically).grid > .row > .column {
      border-top: 1px solid rgba(34, 36, 38, 0.15);
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      padding-top: 2rem !important;
      padding-bottom: 2rem !important;
    }
    .ui.stackable.celled.grid > .row {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
    .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
    .ui.stackable.divided:not(.vertically).grid > .row > .column {
      padding-left: 0em !important;
      padding-right: 0em !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .ui[class*="tablet only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="tablet only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="tablet only"].column:not(.mobile),
    .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.mobile) {
      display: none !important;
    }
    .ui[class*="computer only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="computer only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="computer only"].column:not(.mobile),
    .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.mobile) {
      display: none !important;
    }
    .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
    .ui.grid.grid.grid
      > .row
      > [class*="large screen only"].column:not(.mobile) {
      display: none !important;
    }
    .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
    .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
      display: none !important;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .ui[class*="mobile only"].grid.grid.grid:not(.tablet),
    .ui.grid.grid.grid > [class*="mobile only"].row:not(.tablet),
    .ui.grid.grid.grid > [class*="mobile only"].column:not(.tablet),
    .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.tablet) {
      display: none !important;
    }
    .ui[class*="computer only"].grid.grid.grid:not(.tablet),
    .ui.grid.grid.grid > [class*="computer only"].row:not(.tablet),
    .ui.grid.grid.grid > [class*="computer only"].column:not(.tablet),
    .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.tablet) {
      display: none !important;
    }
    .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
    .ui.grid.grid.grid
      > .row
      > [class*="large screen only"].column:not(.mobile) {
      display: none !important;
    }
    .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
    .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
      display: none !important;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .ui[class*="mobile only"].grid.grid.grid:not(.computer),
    .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
    .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
    .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
      display: none !important;
    }
    .ui[class*="tablet only"].grid.grid.grid:not(.computer),
    .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
    .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
    .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
      display: none !important;
    }
    .ui[class*="large screen only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
    .ui.grid.grid.grid
      > .row
      > [class*="large screen only"].column:not(.mobile) {
      display: none !important;
    }
    .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
    .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
      display: none !important;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    .ui[class*="mobile only"].grid.grid.grid:not(.computer),
    .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
    .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
    .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
      display: none !important;
    }
    .ui[class*="tablet only"].grid.grid.grid:not(.computer),
    .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
    .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
    .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
      display: none !important;
    }
    .ui[class*="widescreen only"].grid.grid.grid:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
    .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
    .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile) {
      display: none !important;
    }
  }

  @media only screen and (min-width: 1920px) {
    .ui[class*="mobile only"].grid.grid.grid:not(.computer),
    .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
    .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
    .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer) {
      display: none !important;
    }
    .ui[class*="tablet only"].grid.grid.grid:not(.computer),
    .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
    .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
    .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer) {
      display: none !important;
    }
  }
`;

export default style;
