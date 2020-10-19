import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import mapMarkerimg from '../images/map-marker.svg'
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerimg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong>Santo André</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map center={[-23.6399518,-46.4873902]} zoom={15} style={{width:'100%', height:'100%'}}>
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FF  F"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap; 