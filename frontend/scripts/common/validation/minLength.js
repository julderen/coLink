export default min => value => ((String(value).length > min) ? undefined : `Длина пароля должна быть больше ${min}`);
