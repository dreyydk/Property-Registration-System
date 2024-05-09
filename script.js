const registeredProperties = [];
let option = 0;

do {
  option = parseInt(
    window.prompt(
      "Number of registered properties: " +
        registeredProperties.length +
        "\n\nChoose one of the options below.\n\n1: Create a property.\n2: View registered properties.\n3: Shut down."
    )
  );
  switch (option) {
    case 1:
      let property = {};
      property.owner = window.prompt("Please type the property owner's name:");
      property.bedrooms = window.prompt(
        "How many bedrooms does the property have?"
      );
      property.bathrooms = window.prompt(
        "How many bathrooms does the property have?"
      );
      property.garage = window.prompt("Does the property have a garage?");
      registeredProperties.push(property);
      break;
    case 2:
      for (let i = 0; i < registeredProperties.length; i++) {
        window.alert(
          "Property number " +
            (i + 1) +
            "\n\nOwner: " +
            registeredProperties[i].owner +
            "\nBedrooms: " +
            registeredProperties[i].bedrooms +
            "\nBathrooms: " +
            registeredProperties[i].bathrooms +
            "\nGarage: " +
            registeredProperties[i].garage
        );
      }
      break;
    case 3:
      window.alert("The system is shutting down...");
      break;
    default:
      window.alert("Please choose a valid option! (1 to 3).");
      break;
  }
} while (option !== 3);
