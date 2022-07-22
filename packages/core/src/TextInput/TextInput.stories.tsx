import React from 'react';
import TextInput from './index';
import dedent from 'dedent';
// import page from './TextInput.stories.mdx';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Source } from '@storybook/addon-docs';
import { css } from '@emotion/css';

export default {
    title: 'Form Controls/TextInput',
    component: TextInput,
    // parameters: {
    //     docs: {
    //         // page,

    //     }
    // }
} as ComponentMeta<typeof TextInput>;

const Template = (args) => <TextInput {...args} />;

// export const Import = () => (
//     <Source language="js" code={dedent`
//         import TextInput from '@overcast-ui/core/TextInput';
//     `} />
// );

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    placeholder: 'disabled TextInput'
};
Disabled.parameters = {
    docs: {
      description: {
        story: dedent`
            A \`<TextInput/>\` which has been disabled.
        `
      },
    },
  };



export const Intent = () => (
    <div className={css`
        margin: 16px 0 8px;
        display: flex;
        gap: 16px;
        & ${TextInput} {
            flex: 1 1 auto;
        }
    `}>
        <TextInput placeholder="no intent" />
        <TextInput intent="success" placeholder={`intent="success"`} />
        <TextInput intent="danger" placeholder={`intent="danger"`} />
        <TextInput intent="warning" placeholder={`intent="warning"`} />
        <TextInput intent="primary" placeholder={`intent="primary"`} />
    </div>
);


Intent.parameters = {
    docs: {
        description: {
            story: dedent`
                Intents provide a way to visually communicate the status of an input. For example, a \`TextInput\` with a \`intent="danger"\`
                could communicate an error state while a \`TextInput\` with a \`intent="success"\` might indicate a validated input.
            `
        }
    }
};




// export const IntentDanger = Template.bind({})
// IntentDanger.args = {
//     intent: 'danger'
// };
// export const IntentSuccess = Template.bind({})
// IntentSuccess.args = {
//     intent: 'success'
// };
// export const IntentWarning = Template.bind({})
// IntentWarning.args = {
//     intent: 'warning'
// };
// export const IntentPrimary = Template.bind({})
// IntentPrimary.args = {
//     intent: 'primary'
// };
