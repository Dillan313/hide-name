export const hideName = (fullName) => {
  if (typeof fullName !== 'string') {
    return 'Input provided is not a valid name';
  }

  const nameParts = fullName.trim().split(/\s+/);

  if (nameParts.length < 2) {
    return 'Input provided is not a valid name';
  }

  const validName = /^[A-Za-z]+$/;

  if (!nameParts.every(part => validName.test(part))) {
    return 'Input provided is not a valid name';
  }

  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts[nameParts.length - 1];
  const obscureNameChars = (name) => {
    if (name.length <= 3) {
      return name;
    }
    return name.slice(0, 2) + '*'.repeat(name.length - 3) + name.slice(-1);
  };

  const maskedFirstNames = obscureNameChars(firstName);


  const firstNameParts = nameParts.slice(1, -1)
    .map(name => obscureNameChars(name.toUpperCase()))
    .join(' ');

  const lastNameInitial = lastName[0].toUpperCase() + '.';

  return firstNameParts
    ? `${maskedFirstNames} ${firstNameParts} ${lastNameInitial}`
    : `${maskedFirstNames} ${lastNameInitial}`;
};

