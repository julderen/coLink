import React from 'react';
import { Field } from 'react-final-form';

const License = () => (
  <Field
    name="license"
    type="checkbox"
  >
    {({ input }) => (
      <div className="form-license">
        <input {...input} type="checkbox" className="license__checkbox" />
        <span className="license__label">
          Принимаю условия
          <a className="license__link" href="https://ru.wikipedia.org/wiki" target="_blank">
              пользовательского соглашения
          </a>
        </span>

      </div>
    )}
  </Field>
);

export default License;
