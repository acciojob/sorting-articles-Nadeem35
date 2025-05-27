//your JS code here. If required.

 const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

    // Function to strip 'a', 'an', 'the' from start for sorting
    function stripArticle(bandName) {
      return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort ignoring articles
    const sortedBands = bands.slice().sort((a, b) => {
      const bandA = stripArticle(a).toLowerCase();
      const bandB = stripArticle(b).toLowerCase();
      return bandA.localeCompare(bandB);
    });

    // Render to UL
    const ul = document.getElementById('band');
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
    });