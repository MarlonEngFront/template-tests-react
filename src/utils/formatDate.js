export const MAskDateTeste = date => {
    let dateOnlyDigits = date.replace(/\D/g, '').slice(0, 8);
  
    if (dateOnlyDigits.length >= 5) {
      return `${dateOnlyDigits.slice(0, 2)}/${dateOnlyDigits.slice(
        2,
        4
      )}/${dateOnlyDigits.slice(4)}`;
    } else if (dateOnlyDigits.length >= 3) {
      return `${dateOnlyDigits.slice(0, 2)}/${dateOnlyDigits.slice(2)}`;
    }
    return dateOnlyDigits;
  };
  

  export const onlyNumbers = value => {
    return value.replace(/\D/g, '');
  }

  export const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };
  
