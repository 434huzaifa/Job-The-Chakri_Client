import { Label, TextInput, Button, Select, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { myContext } from "./App";
const initialState = {
    date: new Date('2019-10-25 10:44'),
    locale: { name: 'en-US', label: 'English (US)' },
};
const containerStyles2 = {
    maxWidth: "100%",
};

const AddJob = () => {
    const [date, setDate] = useState(null)
    const {user} = useContext(myContext)
    return (
        <div className="mx-48">
            <form>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="employer" value="Employer" />
                    </div>
                    <TextInput id="employer" name="employer" type="email" value={user.email} readOnly/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Job Title" />
                    </div>
                    <TextInput id="title" name="title" type="text" />
                </div>
                <div
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                    style={containerStyles2}
                >
                    <DatePicker
                        id="datePicker-1"
                        name="enddate"
                        value={initialState.date}
                        onChange={value => setDate(value)}
                        label="EndDate"
                        formatStyle="large"
                        locale={initialState.locale.name}
                        labelAlignment='left'
                    />
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label htmlFor="cate" value="Select your Category" />
                    </div>
                    <Select id="cate" name="cate" required>
                        <option value="web development">Web Development</option>
                        <option value="digital marketing">Digital Marketing</option>
                        <option value="graphics design">Graphics Design</option>
                    </Select>
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label htmlFor="desc" value="Description" />
                    </div>
                    <Textarea id="desc" name="desc" required rows={4} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="min" value="Minimum Price" />
                    </div>
                    <TextInput id="min" name="min" type="number"/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="max"  value="Maximum Price" />
                    </div>
                    <TextInput id="max" name="max" type="number" sizing="md" />
                </div>
                <Button className='mt-2' color="purple" type="submit">Add Job</Button>
            </form>
        </div>
    );
};

export default AddJob;