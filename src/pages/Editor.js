import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import { EditorData } from '../data/dummy';
import DataEntry from './Charts/DataEntry/DataEntry';

const Editor = () => (
  <div className="p-5">
    <Header category="App" title="Editor" />
    <div>
      <DataEntry />
    </div>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 dark:bg-secondary-dark-bg rounded-3xl">
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  </div>
);
export default Editor;