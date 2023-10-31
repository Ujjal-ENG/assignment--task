/* eslint-disable import/prefer-default-export */
import Swal from 'sweetalert2';
import animation from '../../pages/assets/json/animation.gif';

export const showAlert = () => {
  Swal.fire({
      confirmButtonText: 'Got it!',
      imageUrl: animation,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'image',
  });
};
