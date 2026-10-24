<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
  >
    <span><slot /></span>
  </a>
</template>

<style lang="scss" scoped>
@use '@/sass/global' as *;

$icon-margin: 0.9375rem;

a {
  &:hover,
  &:focus {
    text-decoration-thickness: 2px;
    cursor: pointer;
    box-shadow: -0.625rem 0.625rem 0 $blue-tertiary;
  }

  display: flex;
  justify-content: center;
  padding: 0.7813rem;
  font-family: $font-family-heading;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.2;
  color: $red-primary;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-thickness: 0;
  background: transparent;
  border: 0.1875rem solid #d11d66;
  border-radius: 0.3125rem;
  transition: box-shadow ease-in-out 400ms;
}
</style>
