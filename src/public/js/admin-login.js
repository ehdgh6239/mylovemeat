document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');

  loginBtn.addEventListener('click', () => {
    const inputAccount = document.getElementById('inputAccount').value;
    const inputPassword = document.getElementById('inputPassword').value;

    axios({
      method: 'post',
      url: '/api/admins/login',
      data: {
        inputAccount,
        inputPassword,
      },
    })
      .then((response) => {
        const data = response.data;
        alert(data.message);
        window.location.href = '/admin_index';
      })
      .catch((response) => {
        console.log(response);
      });
  });
});
