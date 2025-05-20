<script>
document.querySelectorAll('.menu-img').forEach(img => {
  img.addEventListener('click', () => {
    const title = img.dataset.item;
    const desc = img.dataset.description;
    const src = img.src;

    document.getElementById('modal-img').src = src;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('item-modal').classList.remove('hidden');
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('item-modal').classList.add('hidden');
});

document.getElementById('modal-add-btn').addEventListener('click', () => {
  const item = document.getElementById('modal-title').textContent;
  const size = document.getElementById('modal-size').value;

  alert(`${item} (${size}) added to cart!`);

  // You can customize this part to increment cart or store items
  document.getElementById('item-modal').classList.add('hidden');
});
</script>
