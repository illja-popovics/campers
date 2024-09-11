import icons from '../../assets/sprite.svg'; // Import SVG sprite for icons
import css from "./Features.module.css"; // Import CSS module for styling

// Features component accepts the 'truck' object as a prop
const Features = ({ truck }) => {
  
  // Define the features list with corresponding labels, SVG icon IDs, and optional specific values
  const features = [
    { key: "transmission", label: "Automatic", svg: "diagram", value: "automatic" },
    { key: "kitchen", label: "Kitchen", svg: "cup-hot" },
    { key: "AC", label: "AC", svg: "ac" },
    { key: "bathroom", label: "Bathroom", svg: "water" },
    { key: "TV", label: "TV", svg: "tv" },
    { key: "radio", label: "Radio", svg: "radio" },
    { key: "gas", label: "Gas", svg: "fuel-pump" },
    { key: "microwave", label: "Microwave", svg: "wave" },
    { key: "refrigerator", label: "Frige", svg: "frige" },
    { key: "engine", label: "Hybrid", svg: "engine", value: "hybrid" },
    { key: "engine", label: "Diesel", svg: "engine", value: "diesel" },
    { key: "engine", label: "Petrol", svg: "engine", value: "petrol" },
  ];

  return (
    <div className={css.features}>
      {/* Map through the features array to display available features for the truck */}
      {features.map((feature) => {
        // Check if the truck has the feature either by a boolean (true) or specific value (e.g., "automatic", "hybrid")
        const isFeatureAvailable = truck[feature.key] === true || truck[feature.key] === feature.value;

        // Only render the feature if it's available for the truck
        return isFeatureAvailable ? (
          <div className={css.feature} key={feature.key}>
            {/* Render the corresponding icon for each feature */}
            <svg className={css.icon} width="20" height="20">
              <use href={`${icons}#${feature.svg}`} />
            </svg>
            {/* Render the label for the feature */}
            <span>{feature.label}</span>
          </div>
        ) : null; // If the feature is not available, return null (don't render anything)
      })}
    </div>
  );
}

export default Features;