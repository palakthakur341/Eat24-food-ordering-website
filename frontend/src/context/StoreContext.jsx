@import "../../styles/variables.scss";

nav {
  width: 100%;
  height: 70px;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .left {
    display: flex;
    align-items: center;

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: $primary-color;
      text-decoration: none;
    }
  }

  .right {
    display: flex;
    align-items: center;

    a {
      margin-left: 20px;
      color: $text-color;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        color: $primary-color;
      }
    }

    .register {
      background-color: #fece51;
      color: black;
      padding: 8px 12px;
      border-radius: 4px;
      margin-left: 20px;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        background-color: darken(#fece51, 10%);
      }
    }

    .menu {
      a {
        @include sm {
          display: none;
        }
      }

      .register {
        background-color: #fece51;
        color: black;
      }
    }
  }
}
