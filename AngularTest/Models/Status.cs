using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace SpaTest.Models
{
    public enum Status
    {
        Done,
        [EnumMember(Value = "In Progress")]
        InProgress,
        [EnumMember(Value = "Not Started")]
        NotStarted
    }
}