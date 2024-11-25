document.getElementById('generate-btn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('password-length').value, 10);
    const password = generatePassword(length);
    document.getElementById('password-output').value = password;
  });
  
  document.getElementById('copy-btn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('password-output');
    passwordOutput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
  });
  
  function generatePassword(length) {
    // Customized character pool for a strong password
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/`~-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
  