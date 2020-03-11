// CODE POUR L'ETAPE: GERER UN BOUTON

function askNameAndGreet() {
    const name = prompt('Enter your name');
    const message = 'Hello ' + name + ', how are you?';
    alert(message);
  }

// CODE POUR L'EXERCICE (OPTIONNEL)

function askColor() {
    const name = prompt('Enter your color');
    document.getElementById('paragraph').style.color = name;
  }