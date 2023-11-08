import { Card, Label, TextInput, Button, Select, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { DatePicker } from 'react-rainbow-components';
const initialState = {
    date: new Date('2019-10-25 10:44'),
    locale: { name: 'en-US', label: 'English (US)' },
};
const containerStyles2 = {
    maxWidth: 400,
};

const AddJob = () => {
    const [date, setDate] = useState(null)
    return (
        <div className="mx-48">
            <form>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="base" value="Base input" />
                    </div>
                    <TextInput id="base" type="email" value={"huzaifa2@gmail.com"} readOnly sizing="md" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="base" value="Base input" />
                    </div>
                    <TextInput id="base" type="text" sizing="md" />
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
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Select your country" />
                    </div>
                    <Select id="countries" required>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your message" />
                    </div>
                    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="base" value="Base input" />
                    </div>
                    <TextInput id="base" type="number" sizing="md" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="base" value="Base input" />
                    </div>
                    <TextInput id="base" type="number" sizing="md" />
                </div>
                <Button color="purple" type="submit">Purple</Button>
            </form>
        </div>
    );
};

export default AddJob;