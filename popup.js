import { themeList } from "./constants.js";

document.addEventListener("DOMContentLoaded", function () {
  const themeListElement = document.getElementById("themeList");
  const loadingElement = document.getElementById("loading");
  const errorElement = document.getElementById("error");
  const autoApplyCheckbox = document.getElementById("autoApplyCheckbox");

  const storage = chrome.storage.sync;

  function showError(message) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
    loadingElement.style.display = "none";
  }

  function hideLoading() {
    loadingElement.style.display = "none";
  }

  function selectTheme(themeElement, themeId) {
    console.log("------------selectTheme ", themeId);
    const selectedTheme = document.querySelector(".theme-item.selected");
    if (selectedTheme) {
      selectedTheme.classList.remove("selected");
      selectedTheme.querySelector(".theme-name").style.fontWeight = "normal";
      selectedTheme.querySelector(".theme-name").style.color = "#333";
    }
    themeElement.classList.add("selected");
    themeElement.querySelector(".theme-name").style.fontWeight = "bold";
    themeElement.querySelector(".theme-name").style.color = "#10A37F";
  }

  function loadSavedPreferences() {
    console.log("+++++++++++++asdfasdfasdf");
    storage.get(["currentTheme", "autoApply"], function (result) {
      console.log("=================", result);
      if (result.currentTheme) {
        const savedThemeElement = document.querySelector(
          `.theme-item[data-id="${result.currentTheme}"]`
        );
        if (savedThemeElement) {
          selectTheme(savedThemeElement, result.currentTheme);
        }
      } else {
        const savedThemeElement = document.querySelector(
          `.theme-item[data-id="${themeList[0].id}"]`
        );
        if (savedThemeElement) {
          selectTheme(savedThemeElement, result.currentTheme);
        }
      }
      autoApplyCheckbox.checked = result.autoApply !== false;
    });
  }

  try {
    themeList.forEach((theme, index) => {
      const themeElement = document.createElement("div");
      themeElement.className = "theme-item";
      themeElement.setAttribute("data-id", theme.id);
      themeElement.innerHTML = `
        <span class="theme-name">${theme.name}</span>
        <img class="theme-screenshot" src="theme-images/${theme.screenshot}.png" alt="${theme.name} theme preview">
      `;
      themeElement.addEventListener("click", () => {
        selectTheme(themeElement, theme.id);
        applyTheme(theme.id);
      });
      themeListElement.appendChild(themeElement);

      // if (index === 0) {
      //   selectTheme(themeElement, theme.id);
      // }
    });

    hideLoading();
    loadSavedPreferences();
  } catch (error) {
    showError("Error loading themes: " + error.message);
  }

  function applyTheme(themeId) {
    storage.set(
      {
        currentTheme: themeId,
        // autoApply: autoApplyCheckbox.checked,
      },
      function () {
        console.log("Theme applied:", themeId);
        // console.log("Auto apply:", autoApplyCheckbox.checked);

        if (chrome.runtime.lastError) {
          console.error("Error saving data:", chrome.runtime.lastError.message);
        } else {
          console.log("Data successfully saved:", {
            currentTheme: themeId,
            // autoApply: autoApplyCheckbox.checked,
          });
        }

        sendThemeToContentScript(themeId);
      }
    );
  }

  function sendThemeToContentScript(themeId) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0 && tabs[0].id) {
        console.log("Sending message to content script:", themeId);
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "applyTheme", themeId },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error(
                "Error sending message to content script:",
                chrome.runtime.lastError.message
              );
            } else if (response && response.status === "success") {
              console.log("Response from content script:", response);
            } else {
              console.error(
                "No response or unexpected response from content script."
              );
            }
          }
        );
      } else {
        console.error("No active tab found.");
      }
    });
  }

  autoApplyCheckbox.addEventListener("change", function () {
    storage.set(
      {
        autoApply: autoApplyCheckbox.checked,
      },
      function () {
        console.log("Auto apply:", autoApplyCheckbox.checked);

        if (chrome.runtime.lastError) {
          console.error("Error saving data:", chrome.runtime.lastError.message);
        } else {
          console.log("Data successfully saved:", {
            autoApply: autoApplyCheckbox.checked,
          });
        }
      }
    );
  });
});
