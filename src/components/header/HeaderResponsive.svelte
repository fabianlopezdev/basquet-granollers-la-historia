<script>
  import {hamburgerMenuIcon} from "@assets/icons";
  // export let navigation;
  // export let headerSponsors;

</script>

<button class="dropdown-menu">
  {@html hamburgerMenuIcon}
</button>

<style>
  .dropdown-menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--pd-x-medium);
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 100;
  }
    @media (max-width: 648px) {
    .dropdown-menu {
      right: var(--pd-x-small);
    }
  }
</style>