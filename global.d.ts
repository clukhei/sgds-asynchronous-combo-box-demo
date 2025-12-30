import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "sgds-combo-box": any;
      "sgds-combo-box-option": any;
    }
  }
}
