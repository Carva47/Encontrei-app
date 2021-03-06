import React from 'react'
import { GoogleMap, useJsApiLoader,  } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '238px',

};

const center = {
  lat: -8.8381,
  lng: 13.23454
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBPc35qep7zC6CCQXTm0zYtKo1v4Al6n1g"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)