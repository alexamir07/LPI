function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }
  
  function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "none";
      document.body.style.overflow = ""; 
    }
  }
  
  
  