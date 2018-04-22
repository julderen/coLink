import _ from 'lodash';

export function combine(...validations) {
  return values => _.transform(validations, (result, validation) => _.merge(result, validation(values)));
}

export const validate = (name, ...rules) => values =>
  _.transform(rules, (result, rule) =>
    _.assign(
      result,
      rule(name, _.get(values, name), values)
    )
  );
