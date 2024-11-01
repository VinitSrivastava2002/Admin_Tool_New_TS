import { Editor } from "@monaco-editor/react";
import { ContentCopy } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import xmlFormatter from "xml-formatter";
import { FC, useState } from "react";

interface CodeEditorProps {
  CodeData: string;
}

const dummyXmlData = `
    <?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>

<food>
<name>Belgian Waffles</name>
<price>$5.95</price>
<description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
<calories>650</calories>
</food>

<food>
<name>Strawberry Belgian Waffles</name>
<price>$7.95</price>
<description>Light Belgian waffles covered with strawberries and whipped cream</description>
<calories>900</calories>
</food>

<food>
<name>Berry-Berry Belgian Waffles</name>
<price>$8.95</price>
<description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>
<calories>900</calories>
</food>

<food>
<name>French Toast</name>
<price>$4.50</price>
<description>Thick slices made from our homemade sourdough bread</description>
<calories>600</calories>
</food>

<food>
<name>Homestyle Breakfast</name>
<price>$6.95</price>
<description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>
<calories>950</calories>
</food>

</breakfast_menu>
  `;

const CodeEditor: FC<CodeEditorProps> = ({ CodeData }) => {
  const [copyText, setCopyText] = useState("Copy");
  // console.log(typeof dummyXmlData);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(formattedXmlData);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy"), 2000);
  };
  // Format the XML data before passing it to the editor
  const formattedXmlData = xmlFormatter(CodeData, {
    indentation: "  ", // Indentation for each level
    collapseContent: true, // Keeps minimal content tags on one line
  });
  return (
    <Box
      // display="flex"
      position="relative"
      width="100%"
      height="100%"
      // justifyContent="center"
      // flexDirection="column"
    >
      {/* Monaco Code Editor */}
      <Editor
        height="315px"
        width="100%"
        language="xml"
        value={formattedXmlData}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          renderLineHighlight: "none",
        }}
      />

      {/* Copy Button */}
      <Button
        variant="text"
        color="primary"
        startIcon={copyText === "Copy" ? <ContentCopy /> : null}
        onClick={handleCopyToClipboard}
        sx={{
          position: "absolute",
          top: "10px",
          right: "15px",

          outline: "none",
          color: "grey",
          fontSize: "12px",
          padding: "4px 8px",
          height: "25px",
        }}
      >
        {copyText}
      </Button>
    </Box>
  );
};

export default CodeEditor;
