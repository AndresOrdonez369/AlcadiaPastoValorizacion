import React, { useRef, useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import { Dimensions, View, Modal, Text, TouchableHighlight, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import {setLocation} from './actionCreator';

const Maps = () => {
    
  const dispatch = useDispatch();
  const reducerMap = useSelector((state) => state.ReducerMap);
  const {location} = reducerMap;
  const [mapData, setMapData] = useState({
    regionCoords:{
      latitude:location.coords.latitude, longitude: location.coords.longitude, 
    },
  });
  const {regionCoords} = mapData;
  const regionDelta = {
    latitudeDelta: 0.0922, longitudeDelta: 0.0421
  };
  const { height, width } = Dimensions.get('screen');
  useEffect(() =>{
    setMapData({regionCoords:location.coords})
  },[location]);
    useEffect(() => {
        const askPermissions = async () => {
        const { status, permissions } = await Permissions.getAsync(Permissions.LOCATION);
        let finalStatus = status;
        if (!permissions.location.granted) {
          const { status: newStatus } = await Permissions.askAsync(Permissions.LOCATION);
          finalStatus = status && newStatus;
        }
        if (finalStatus !== 'granted') {
          console.log('Failed to get permisos!');
        }
      };
      askPermissions();
      dispatch(setLocation());
    },[])
    const mapRef = useRef();
    return ( 
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {showClust && <CloserEvents show={showClust} events={dataCluster} />}
          <MapView
            style={[{ height, width }, styles.map]}
            showsUserLocation
            followsUserLocation
            initialRegion={{
              ...regionCoords,
              ...regionDelta,
            }}
            ref={mapRef}
            clusterColor="#9aac64"
            preserveClusterPressBehavior
            onClusterPress={(cluster, markers) => {
              const data = markers.map((mark) => {
                const events = mark.properties.onPress(false);
                return events;
              });
              handleCloserEvents(true, data);
            }}
          >
            {Object.keys(fieldList).length > 0 &&
              Object.keys(fieldList).map((event) => {
                const coords = fieldList[event].coordinates;
                if (!coords.latitude || !coords.longitude) return null;
                const dateN = new Date(fieldList[event].timestamp);
                const date = `${dateN.getDate()}/${dateN.getMonth()}/${dateN.getFullYear()}`;
                const [hour, minute] = new Date(parseInt(fieldList[event].timestamp, 10))
                  .toLocaleTimeString('en-US')
                  .split(/:| /);
                const clusterObj = {
                  name: fieldList[event].eventName,
                  date: `${date} - ${hour}:${minute}`,
                  docID: event,
                };
                return (
                  <Marker
                    key={event}
                    coordinate={{
                      latitude: parseFloat(coords.latitude),
                      longitude: parseFloat(coords.longitude),
                    }}
                    onPress={(value = true) => pressMarker(value, clusterObj, event)}
                  >
                    <Image
                      source={activeEvent}
                      style={{ resizeMode: 'contain', maxHeight: 65, maxWidth: 88 }}
                    />
                  </Marker>
                );
              })}
            {newevent && (
              <Marker
                draggable
                title={i18n.t('holdOnForLocate')}
                coordinate={{
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                }}
                onDragEnd={(e) => {
                  this.toggleShowCancelBtn();
                  this.visibleBasicModal(e.nativeEvent.coordinate);
                }}
              >
                <Image
                  source={createEvent}
                  style={{ resizeMode: 'contain', maxHeight: 65, maxWidth: 88 }}
                />
              </Marker>
            )}
          </MapView>
          <GooglePlaces goto={handlerGoto} latitude1={latitude} longitude1={longitude} />
          <BasicButton
            icon={
              <Icon
                type="material"
                name={iconName}
                color="white"
                size={40}
                iconStyle={{ marginLeft: -2 }}
              />
            }
            buttonStyle={bubbleStyle}
            onPress={() => {
              this.toggleShowCancelBtn();
              return startEvent();
            }}
          />
        </View>
      </SafeAreaView>

     );
}
 
export default Maps;