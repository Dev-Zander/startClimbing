import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 27.942439, lng: -82.4571517 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 27.942439, lng: -82.4571517 }} />}
  </GoogleMap>
))
export default MyMapComponent