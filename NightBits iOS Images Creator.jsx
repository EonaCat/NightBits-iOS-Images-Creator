/*

NightBits iOS Images Creator (Use this to create all the required icons and splashscreen resolutions) 
(Updated to work with iOS 7)

Created by NightBits

(The images that will be created can be used by Xcode in an Asset Catalog) (Image set)

(iTunesArtwork is not needed for Asset Catalog for the icons and splashscreen) (created for iTunes)

Put this file in the following folder and restart photoshop: 


X86 : C:\Program Files\Adobe\Adobe Photoshop CS6\Presets\Scripts 

X64 : C:\Program Files (x86)\Adobe\Adobe Photoshop CS6\Presets\Scripts 
      C:\Program Files\Adobe\Adobe Photoshop CS6 (64 Bit)\Presets\Scripts

Tested with the following photoshop versions: 

CS 5
CS 6

Put this file in the following folder(s) and restart photoshop:

X86 : C:\Program Files\Adobe\Adobe Photoshop CS6\Presets\Scripts 

X64 : C:\Program Files (x86)\Adobe\Adobe Photoshop CS6\Presets\Scripts 
      C:\Program Files\Adobe\Adobe Photoshop CS6 (64 Bit)\Presets\Scripts

Open within Photoshop:

File > Scripts > NightBits iOS Images Creator

*/

// enable double clicking from the 
// Macintosh Finder or the Windows Explorer
#target photoshop

// Make Photoshop the frontmost application
app.bringToFront();

// Create some global variables that we can use
var TYPE1 = "icon";
var TYPE2 = "splashScreen";

var EXITAPPLICATION = "exit";
var EXTENSION = "png"; 

var SEPARATOR = "/";

var DOCUMENT = null;

function createJSONFile(destination)
{
    // TODO: Dont know how to create the specific content JSON file for the imageset
}

function createImages(document, type)
{
  try
  {
      DOCUMENT = document;

      if (DOCUMENT == null)
      {
            throw "The file could not be opened. (Please make sure it is a PNG file)";
      }
   
      var startState = DOCUMENT.activeHistoryState;
      var initialPreferences = app.preferences.rulerUnits;
      app.preferences.rulerUnits = Units.PIXELS;
   
      if (DOCUMENT.width != DOCUMENT.height)
      {
            throw "Image is not a square";
      }
      else if ((DOCUMENT.width < 1024) && (DOCUMENT.height < 1024))
      {
            throw "Image is too small!  Image must be at least 1024x1024 pixels.";
      }
      else if (DOCUMENT.width < 1024)
      {
            throw "Image width is too small!  Image width must be at least 1024 pixels.";
      }
      else if (DOCUMENT.height < 1024)
      {
            throw "Image height is too small!  Image height must be at least 1024 pixels.";
      }
      
      var destinationFolder = Folder.selectDialog("Choose the destination folder (for the " + type + ")");
   
      if (destinationFolder == null)
      {
          throw EXITAPPLICATION;
      }
   
      var saveForWeb = new ExportOptionsSaveForWeb();
      saveForWeb.format = SaveDocumentType.PNG;
      saveForWeb.PNG8 = false;
      saveForWeb.transparency = true;
      DOCUMENT.info = null;
      
      var icons = [
        {"name": "iTunesArtwork_icon_1024x1024", "wsize":1024,  "hsize":1024},
        {"name": "iTunesArtwork_icon", "wsize":512,    "hsize":512},      
        
        {"name": "icon57x57",       "wsize":57,    "hsize":57},
        {"name": "icon114x114",    "wsize":114,  "hsize":114},
        
        {"name": "icon29x29",        "wsize":29,    "hsize":29},
        {"name": "icon29x29-1",     "wsize":29,    "hsize":29},
        
        {"name": "icon40x40",        "wsize":40,     "hsize":40},
        {"name": "icon50x50",        "wsize":50,     "hsize":50},
        
        {"name": "icon58x58",        "wsize":58,     "hsize":58},
        {"name": "icon58x58-1",     "wsize":58,     "hsize":58},
        
        {"name": "icon72x72",        "wsize":72,    "hsize":72},        
        
        {"name": "icon76x76",        "wsize":76,    "hsize":76},
        
        {"name": "icon80x80",        "wsize":80,    "hsize":80},
        {"name": "icon80x80-1",     "wsize":80,    "hsize":80},
        
        {"name": "icon100x100",     "wsize":100,  "hsize":100},
        
        {"name": "icon120x120",     "wsize":120,  "hsize":120},
        
        {"name": "icon144x144",     "wsize":144,  "hsize":144},
        
        {"name": "icon152x152",     "wsize":152,  "hsize":152}
      ];
   
      var splashscreen = [
        {"name": "iTunesArtwork_splashscreen",  "wsize":1024, "hsize":1024},
        {"name": "iTunesArtwork_splashscreen",  "wsize":512,   "hsize":512},
        {"name": "Default",                                 "wsize":320,   "hsize":480},
        {"name": "Default@2x",                           "wsize":640,   "hsize":960},
        {"name": "Default-568h@2x",                   "wsize":640,   "hsize":1136},
        
        {"name": "splashscreen_320x480",           "wsize":320,    "hsize":480},        
        
        {"name": "splashscreen_640x960",           "wsize":640,    "hsize":960},
        {"name": "splashscreen_640x960-1",           "wsize":640,    "hsize":960},
        
        {"name": "splashscreen_640x1136",           "wsize":640,    "hsize":1136},
        {"name": "splashscreen_640x1136-1",           "wsize":640,    "hsize":1136},

        {"name": "splashscreen_768x1004",         "wsize":768,    "hsize":1004},
        
        {"name": "splashscreen_768x1024",         "wsize":768,    "hsize":1024},
        {"name": "splashscreen_768x1024-1",         "wsize":768,    "hsize":1024},        
        
        {"name": "splashscreen_1024x768",         "wsize":1024,   "hsize":768},
        {"name": "splashscreen_1024x768-1",         "wsize":1024,   "hsize":768},

        {"name": "splashscreen_1024x748",         "wsize":1024,   "hsize":748},
        
        {"name": "splashscreen_1536x2008",        "wsize":1536,   "hsize":2008},

        {"name": "splashscreen_1536x2048",        "wsize":1536,   "hsize":2048},
        {"name": "splashscreen_1536x2048-1",        "wsize":1536,   "hsize":2048},
        
        {"name": "splashscreen_2048x1496",        "wsize":2048,   "hsize":1496},
        
        {"name": "splashscreen_2048x1536",        "wsize":2048,   "hsize":1536},        
        {"name": "splashscreen_2048x1536-1",        "wsize":2048,   "hsize":1536}        
      ]; 
   
      var format   = null;
      var imageSetDirectory = null;
      var imageSetName = null;
      var imageSetContentFile = "Contents.json";
      
      if (type == TYPE1)
      {
          format = icons;
          imageSetName = "AppIcon.appiconset";
          imageSetDirectory = Folder(destinationFolder + SEPARATOR + imageSetName);
      }
      else if (type == TYPE2)
      {
          format = splashscreen; 
          imageSetName = "LaunchImage.launchimage";
          imageSetDirectory = Folder(destinationFolder + SEPARATOR + imageSetName);          
      }
      
      if (format == null || imageSetDirectory == null || imageSetName == null)
      {
          throw EXITAPPLICATION;
      }
   
     /*
       // TODO: Does not work with some administrative rights yet !
       if (!imageSetDirectory.exists) 
       {
            imageSetDirectory.create();
       }                
       */
   
      var image;
      for (i = 0; i < format.length; i++) 
      {
        image = format[i];
        DOCUMENT.resizeImage(image.wsize, image.hsize, null, ResampleMethod.BICUBICSHARPER);
   
        var destinationFileName = image.name + "." + EXTENSION;
            
        DOCUMENT.exportDocument(new File(destinationFolder + SEPARATOR /* + imageSetName + SEPARATOR */ + destinationFileName), ExportType.SAVEFORWEB, saveForWeb);
        DOCUMENT.activeHistoryState = startState;
      }
  
      // Create the contents.json file
      createJSONFile(destinationFolder + SEPARATOR /* + imageSetName + SEPARATOR */ + imageSetContentFile);
    }
  catch (exception)
  {
      if ((exception != null))
      {
        if (exception != EXITAPPLICATION)
        {
          alert(exception);
        }
        return false;
      }
   }
  finally
  {    
      app.preferences.rulerUnits = initialPreferences;
  }
return true;
}

function createSplashScreens()
{
        var result = confirm("Do you want to use the active document as well ?", false);    
        var splashScreen = null;
    
        if (result == true)
        {
                if (app.documents.length > 0)
                {
                    splashScreen = app.activeDocument;
                }
            
            if (splashScreen == null)
            {
                alert("No active document found, please select an image file");
            }
        }
    
        if (splashScreen == null)
        {
            splashScreen = File.openDialog("Select a PNG file that is at least 1024x1024. (This is for the splashscreen)", "*." + EXTENSION, false);
            splashScreen= open(splashScreen, OpenDocumentType.PNG);
        }
    
        if (splashScreen !== null) 
        {            
            if (createImages(splashScreen, TYPE2))
            {
               alert("iOS Splashscreens created!");
            }
        }    
}

function createIcons()
{
    var icon;
        
    if (app.documents.length > 0)
    {
        icon = app.activeDocument;
    }

    if (icon == null)
    {
        alert("No active document found, please select an image file");
        icon = File.openDialog("Select a PNG file that is at least 1024x1024. (This is for the icon)", "*." + EXTENSION, false);
        icon = open(icon, OpenDocumentType.PNG);
    }    
      
    if (icon !== null) 
    {         
        if (createImages(icon, TYPE1))
        {
          alert("iOS Icons created!");
          
          var result = confirm("Do you want to create splashscreens as well?", false);
           
           if (result == true) 
           { 
                createSplashScreens();
           }
        }
    }
}

createIcons();

// Close the document after the conversions (Without saving changes)
if (DOCUMENT != null)
{
     DOCUMENT.close(SaveOptions.DONOTSAVECHANGES);
}

alert("Thank you for using the iOS image creation script. Created by NightBits");
