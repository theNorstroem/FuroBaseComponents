// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: task.proto

package task

import (
	person "../person"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	project "project"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

// Task data description
type Task struct {
	// Short task description
	Description string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	// Localized String representation of a task
	DisplayName *project.ProjectCollection `protobuf:"bytes,1,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// Estimated time in days
	EstimatedTime int32 `protobuf:"varint,3,opt,name=estimated_time,json=estimatedTime,proto3" json:"estimated_time,omitempty"`
	// Owner of a task
	Owner *person.Person `protobuf:"bytes,4,opt,name=owner,proto3" json:"owner,omitempty"`
	// List of subtasks
	Subtasks             *Task    `protobuf:"bytes,5,opt,name=subtasks,proto3" json:"subtasks,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Task) Reset()         { *m = Task{} }
func (m *Task) String() string { return proto.CompactTextString(m) }
func (*Task) ProtoMessage()    {}
func (*Task) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce5d8dd45b4a91ff, []int{0}
}
func (m *Task) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Task) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Task.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Task) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Task.Merge(m, src)
}
func (m *Task) XXX_Size() int {
	return m.Size()
}
func (m *Task) XXX_DiscardUnknown() {
	xxx_messageInfo_Task.DiscardUnknown(m)
}

var xxx_messageInfo_Task proto.InternalMessageInfo

func (m *Task) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Task) GetDisplayName() *project.ProjectCollection {
	if m != nil {
		return m.DisplayName
	}
	return nil
}

func (m *Task) GetEstimatedTime() int32 {
	if m != nil {
		return m.EstimatedTime
	}
	return 0
}

func (m *Task) GetOwner() *person.Person {
	if m != nil {
		return m.Owner
	}
	return nil
}

func (m *Task) GetSubtasks() *Task {
	if m != nil {
		return m.Subtasks
	}
	return nil
}

func init() {
	proto.RegisterType((*Task)(nil), "task.Task")
}

func init() { proto.RegisterFile("task.proto", fileDescriptor_ce5d8dd45b4a91ff) }

var fileDescriptor_ce5d8dd45b4a91ff = []byte{
	// 243 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0x31, 0x4b, 0xc4, 0x30,
	0x14, 0xc7, 0x89, 0x5e, 0x45, 0x5f, 0xcf, 0x1b, 0xe2, 0x12, 0x3a, 0x94, 0x20, 0x2a, 0x9d, 0x72,
	0xa0, 0xb3, 0x8b, 0xee, 0x72, 0x84, 0xdb, 0x4b, 0xae, 0x7d, 0x43, 0xbc, 0xa6, 0x09, 0x49, 0x44,
	0xfc, 0x86, 0x8e, 0x7e, 0x00, 0x07, 0xe9, 0x27, 0x91, 0xa6, 0xb5, 0x38, 0xfd, 0xc3, 0xfb, 0xfd,
	0x79, 0xe1, 0xf7, 0x00, 0xa2, 0x0a, 0x47, 0xe1, 0xbc, 0x8d, 0x96, 0xae, 0xc6, 0x77, 0x71, 0xe5,
	0xd0, 0x07, 0xdb, 0x6f, 0xa7, 0x98, 0x50, 0xc1, 0x9d, 0xb7, 0xaf, 0xd8, 0xc4, 0xed, 0x9c, 0x75,
	0x63, 0xbb, 0x0e, 0x9b, 0xa8, 0xff, 0x1a, 0xd7, 0xdf, 0x04, 0x56, 0x7b, 0x15, 0x8e, 0x94, 0x43,
	0xde, 0x62, 0x68, 0xbc, 0x76, 0x23, 0x65, 0x27, 0x9c, 0x54, 0x17, 0xf2, 0xff, 0x88, 0x3e, 0xc2,
	0xba, 0xd5, 0xc1, 0x75, 0xea, 0xa3, 0xee, 0x95, 0x41, 0x46, 0x38, 0xa9, 0xf2, 0xfb, 0x42, 0xcc,
	0xbb, 0xc5, 0x6e, 0xca, 0xe7, 0xe5, 0x0b, 0x99, 0xcf, 0xfd, 0x17, 0x65, 0x90, 0xde, 0xc2, 0x06,
	0x43, 0xd4, 0x46, 0x45, 0x6c, 0xeb, 0xa8, 0x0d, 0xb2, 0x53, 0x4e, 0xaa, 0x4c, 0x5e, 0x2e, 0xd3,
	0xbd, 0x36, 0x48, 0x6f, 0x20, 0xb3, 0xef, 0x3d, 0x7a, 0xb6, 0x4a, 0xeb, 0x37, 0x62, 0x16, 0xda,
	0xa5, 0x90, 0x13, 0xa4, 0x77, 0x70, 0x1e, 0xde, 0x0e, 0xa3, 0x78, 0x60, 0x59, 0x2a, 0x82, 0x48,
	0x27, 0x19, 0x5d, 0xe4, 0xc2, 0x9e, 0xd6, 0x9f, 0x43, 0x49, 0xbe, 0x86, 0x92, 0xfc, 0x0c, 0x25,
	0x39, 0x9c, 0x25, 0xe7, 0x87, 0xdf, 0x00, 0x00, 0x00, 0xff, 0xff, 0x2b, 0xd7, 0x97, 0x4f, 0x3e,
	0x01, 0x00, 0x00,
}

func (m *Task) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Task) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if m.DisplayName != nil {
		dAtA[i] = 0xa
		i++
		i = encodeVarintTask(dAtA, i, uint64(m.DisplayName.Size()))
		n1, err1 := m.DisplayName.MarshalTo(dAtA[i:])
		if err1 != nil {
			return 0, err1
		}
		i += n1
	}
	if len(m.Description) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintTask(dAtA, i, uint64(len(m.Description)))
		i += copy(dAtA[i:], m.Description)
	}
	if m.EstimatedTime != 0 {
		dAtA[i] = 0x18
		i++
		i = encodeVarintTask(dAtA, i, uint64(m.EstimatedTime))
	}
	if m.Owner != nil {
		dAtA[i] = 0x22
		i++
		i = encodeVarintTask(dAtA, i, uint64(m.Owner.Size()))
		n2, err2 := m.Owner.MarshalTo(dAtA[i:])
		if err2 != nil {
			return 0, err2
		}
		i += n2
	}
	if m.Subtasks != nil {
		dAtA[i] = 0x2a
		i++
		i = encodeVarintTask(dAtA, i, uint64(m.Subtasks.Size()))
		n3, err3 := m.Subtasks.MarshalTo(dAtA[i:])
		if err3 != nil {
			return 0, err3
		}
		i += n3
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func encodeVarintTask(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *Task) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.DisplayName != nil {
		l = m.DisplayName.Size()
		n += 1 + l + sovTask(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovTask(uint64(l))
	}
	if m.EstimatedTime != 0 {
		n += 1 + sovTask(uint64(m.EstimatedTime))
	}
	if m.Owner != nil {
		l = m.Owner.Size()
		n += 1 + l + sovTask(uint64(l))
	}
	if m.Subtasks != nil {
		l = m.Subtasks.Size()
		n += 1 + l + sovTask(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovTask(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozTask(x uint64) (n int) {
	return sovTask(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Task) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTask
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Task: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Task: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DisplayName", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTask
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.DisplayName == nil {
				m.DisplayName = &project.ProjectCollection{}
			}
			if err := m.DisplayName.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTask
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EstimatedTime", wireType)
			}
			m.EstimatedTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EstimatedTime |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTask
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Owner == nil {
				m.Owner = &person.Person{}
			}
			if err := m.Owner.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Subtasks", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTask
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Subtasks == nil {
				m.Subtasks = &Task{}
			}
			if err := m.Subtasks.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTask(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTask
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTask
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTask(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTask
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTask
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTask
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTask
			}
			iNdEx += length
			if iNdEx < 0 {
				return 0, ErrInvalidLengthTask
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowTask
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipTask(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthTask
				}
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthTask = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTask   = fmt.Errorf("proto: integer overflow")
)