document.getElementById('h').addEventListener('click', () => (
	// No END BRACKETS Or This Is Dodo
	if (localStorage.clickCount) {
		localStorage.clickCount = Number(localStorage.clickCount) + 1;
	  } else {
		localStorage.clickCount = 0;
	  }
	  document.getElementById("h-count").innerHTML = localStorage.clickCount + " time(s).";
));
  
