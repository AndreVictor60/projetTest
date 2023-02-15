export const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };

  export const dateParser = (num) => {
    let options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
  
    let timestamp = Date.parse(num);
  
    let date = new Date(timestamp).toLocaleDateString("fr-FR", options);
  
    return date.toString();
  };

  export const timeParser = (num) => {
    let options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
  
    let timestamp = Date.parse(num);
  
    let date = new Date(timestamp).toLocaleTimeString('fr-FR',options);
  
    return date.toString();
  };