import { Card, Label, TextInput, Button } from 'flowbite-react';
import { useState } from 'react';
import { Slider } from 'react-rainbow-components';
import { DatePicker } from 'react-rainbow-components';
const containerStyles = {
    maxWidth: 700,
};
const initialState = {
    date: new Date('2019-10-25 10:44'),
    locale: { name: 'en-US', label: 'English (US)' },
};

const containerStyles2 = {
    maxWidth: 400,
};
const Details = () => {
    const [value, setValue] = useState(100);
    const [date, setDate] = useState(null)

    const onChange = event => setValue(event.target.value);
    return (
        <div className="px-48">
            <Card className="w-full h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Create Me a python library
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Create Me a library using python that will hack nasa</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">$17-$16</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">2023-1-11</p>
                <form>
                    <div
                        className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                        style={containerStyles}
                    >
                        <Slider label="Slider label" max={500} min={100} value={value} onChange={onChange} step={1} required />

                    </div>
                    <div
                        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                        style={containerStyles2}
                    >
                        <DatePicker
                            id="datePicker-1"
                            value={initialState.date}
                            onChange={value => setDate(value)}
                            label="DatePicker Label"
                            formatStyle="large"
                            locale={initialState.locale.name}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Base input" />
                        </div>
                        <TextInput id="base" type="email" value={"huzaifa@gmail.com"} readOnly sizing="md" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Base input" />
                        </div>
                        <TextInput id="base" type="email" value={"huzaifa2@gmail.com"} readOnly sizing="md" />
                    </div>
                    <Button color="purple" type="submit">Purple</Button>
                </form>
            </Card>
        </div>
    );
};

export default Details;