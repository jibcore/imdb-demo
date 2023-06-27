<template>
  <footer>
    <div class="footer-content">
      <div>Ruslan Yefimov</div>
      <div>Contacts</div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--theme-footer-background-color);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--theme-footer-max-width);
  width: 100%;
}
</style>
