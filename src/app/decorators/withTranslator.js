import { injectIntl } from "react-intl";
import React from "react";
import moment from "moment";

const withTranslator = WrappedComponent =>
  injectIntl(({ intl, ...props }) => {
    const translate = (message, values) => intl.formatMessage({ id: message, defaultMessage: message }, values);

    const translateHtml = (...args) => <span dangerouslySetInnerHTML={{ __html: translate(...args) }} />;

    return (
      <WrappedComponent
        {...props}
        translate={translate}
        translateHtml={translateHtml}
        intl={intl}
      />
    );
  });

export default withTranslator;
