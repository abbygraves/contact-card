// IMPORT MODULES
import "./form";
import "./submit";

// IMPORT DATABASE
import { initdb, getDb, postDb } from './database';

// IMPORT IMAGES
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function () {
  initdb();
  // getDb();
  // postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
  // getDb();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

// IMPORT CSS FILES & BOOTSTRAP 
import "../css/index.css";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
