import { Meta } from '@storybook/react'

export default {
  title: 'Page Templates/Example',
  argTypes: {
    bgColor: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta

export const BasicMarkup = () => (
  <>
    <h2>This is a header two</h2>
    <p>
      <strong>Double Paragraph:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor
      pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
      dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod,
      urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum
      nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar
      metus sapien in urna.
    </p>
    <p>
      Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit
      ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis
      ligula quis nulla malesuada tempor.
    </p>
  </>
)
