const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker tidak mendukung pada broswer ini...');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker berhasil diinstall!');
  } catch (error) {
    console.log('Register SW Gagal :(', error);
  }
};

export default swRegister();
