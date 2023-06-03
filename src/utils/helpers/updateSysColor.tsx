const updateSysColor = (color: string) => {
    if (color === "babybrown") {
      document.documentElement.style.setProperty("--info-color", "#f6e9ea");
      document.documentElement.style.setProperty("--tab-color", "#f4dbdd");
    } else if (color === "babyblue") {
      document.documentElement.style.setProperty("--info-color", "#e3f8ff");
      document.documentElement.style.setProperty("--tab-color", "#d2f1fc");
    } else if (color === "babypink") {
      document.documentElement.style.setProperty("--info-color", "#f4e7f6");
      document.documentElement.style.setProperty("--tab-color", "#f3e1f6");
    } else if (color === "babypurple") {
      document.documentElement.style.setProperty("--info-color", "#dfdffe");
      document.documentElement.style.setProperty("--tab-color", "#cdcdf5");
    }
  };
  
  export default updateSysColor;