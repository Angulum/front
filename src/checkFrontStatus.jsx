const checkFrontendStatus = async () => {
  if (window.location.pathname === "/maintenance") return;

  try {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/services`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.front) {
          window.location.href = "/maintenance";
        }
      });
  } catch (error) {
    console.error("Error checking frontend status:", error);
  }
};

export default checkFrontendStatus;
