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

function createImages(file, type)
{
  try
  {
      var doc = open(file, OpenDocumentType.PNG);
      
      if (doc == null)
      {
            throw "The file could not be opened. (Please make sure it is a PNG file)";
      }
   
      var startState = doc.activeHistoryState;
      var initialPreferences = app.preferences.rulerUnits;
      app.preferences.rulerUnits = Units.PIXELS;
   
      if (doc.width != doc.height)
      {
            throw "Image is not square";
      }
      else if ((doc.width < 1024) && (doc.height < 1024))
      {
            throw "Image is too small!  Image must be at least 1024x1024 pixels.";
      }
      else if (doc.width < 1024)
      {
            throw "Image width is too small!  Image width must be at least 1024 pixels.";
      }
      else if (doc.height < 1024)
      {
            throw "Image height is too small!  Image height must be at least 1024 pixels.";
      }
      
      var destFolder = Folder.selectDialog("Choose the destination folder (for the " + type + ")");
   
      if (destFolder == null)
      {
        throw "exit";
      }
   
      var saveForWeb = new ExportOptionsSaveForWeb();
      saveForWeb.format = SaveDocumentType.PNG;
      saveForWeb.PNG8 = false;
      saveForWeb.transparency = true;
      doc.info = null;
      
      var icons = [
        {"name": "iTunesArtwork_icon_1024x1024", "wsize":1024,  "hsize":1024},
        {"name": "iTunesArtwork_icon", "wsize":512,    "hsize":512},      
        {"name": "icon57x57",               "wsize":57,    "hsize":57},
        {"name": "icon29x29",               "wsize":29,    "hsize":29},
        {"name": "icon40x40",               "wsize":40,     "hsize":40},
        {"name": "icon50x50",               "wsize":50,     "hsize":50},
        {"name": "icon58x58",               "wsize":58,     "hsize":58},
        {"name": "icon72x72",               "wsize":72,    "hsize":72},        
        {"name": "icon76x76",               "wsize":76,    "hsize":76},
        {"name": "icon80x80",               "wsize":80,    "hsize":80},
        {"name": "icon100x100",            "wsize":100,  "hsize":100},
        {"name": "icon114x114",            "wsize":114,  "hsize":114},
        {"name": "icon120x120",            "wsize":120,  "hsize":120},
        {"name": "icon144x144",            "wsize":144,  "hsize":144},
        {"name": "icon152x152",            "wsize":152,  "hsize":152},
        {"name": "icon176x176",            "wsize":176,  "hsize":176}
      ];
   
      var splashscreen = [
        {"name": "iTunesArtwork_splashscreen", "wsize":1024,  "hsize":1024},
        {"name": "iTunesArtwork_splashscreen",       "wsize":512,    "hsize":512},
        {"name": "Default",            "wsize":320,     "hsize":480},
        {"name": "Default@2x",            "wsize":640,     "hsize":960},
        {"name": "Default-568h@2x",            "wsize":640,     "hsize":1136},
        {"name": "splashscreen_640x960",            "wsize":640,     "hsize":960},
        {"name": "splashscreen_768x1004",         "wsize":768,   "hsize":1004},
        {"name": "splashscreen_768x1024",             "wsize":768,     "hsize":1024},
        {"name": "splashscreen_1024x768",         "wsize":1024,    "hsize":768},
        {"name": "splashscreen_1024x748",         "wsize":1024,    "hsize":748},
        {"name": "splashscreen_1536x2008",            "wsize":1536,       "hsize":2008},
        {"name": "splashscreen_1536x2048",            "wsize":1536,       "hsize":2048},
        {"name": "splashscreen_2048x1496",            "wsize":2048,       "hsize":1496},
        {"name": "splashscreen_2048x1536",         "wsize":2048,     "hsize":1536}        
      ]; 
   
      var formats   = null;
      
      if (type == "icon")
      {
          formats = icons;
      }
      else if (type == "splashscreen")
      {
          formats = splashscreen;
      }
      
      if (formats == null)
      {
          throw "exit";
      }
   
      var image;
      for (i = 0; i < formats.length; i++) 
      {
        image = formats[i];
        doc.resizeImage(image.wsize, image.hsize, null, ResampleMethod.BICUBICSHARPER);
   
        var destFileName = image.name + ".png";
      
        doc.exportDocument(new File(destFolder + "/" + destFileName), ExportType.SAVEFORWEB, saveForWeb);
        doc.activeHistoryState = startState;
      }
    }
  catch (exception)
  {
      if ((exception != null))
      {
        if (exception != "exit")
        {
          alert(exception);
        }
        return false;
      }
   }
  finally
  {
      if (doc != null)
      {
          doc.close(SaveOptions.DONOTSAVECHANGES);
      }
    
      app.preferences.rulerUnits = initialPreferences;
  }
return true;
}

    var icon = File.openDialog("Select a PNG file that is at least 1024x1024. (This is for the icon)", "*.png", false);
    var splashscreen = File.openDialog("Select a PNG file that is at least 1024x1024. (This is for the splashscreen)", "*.png", false);
   
    if (icon !== null) 
    { 
        if (createImages(icon, "icon"))
        {
          alert("iOS Icons created!");
        }
    }

    if (splashscreen !== null) 
    { 
        if (createImages(splashscreen, "splashscreen"))
        {
          alert("iOS Splashscreens created!");
        }
    }

    alert("Thank you for using the iOS image creation script. Created by NightBits");
